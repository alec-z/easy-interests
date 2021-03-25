import {PayItemModel} from '../model/pay-item.model';
import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, from, fromEvent, Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, reduce} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class PayItemService {
  itemsChange = new ReplaySubject<string>();
  // tslint:disable-next-line:variable-name
  private _incomes: PayItemModel[] ;
  // tslint:disable-next-line:variable-name
  private _paybacks: PayItemModel[];

  private ws: WebSocket;

  interestReady = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.connectWebSocket();
    this.itemsChange.subscribe(() => {
      if ((this.incomes == null || this.incomes.length === 0) || (this.paybacks == null || this.paybacks.length === 0)) {
        this.interestReady.next('检查借款和还款输入');
        return;
      }
      let allIncome = 0;
      let allPayback = 0;
      from(this.incomes).pipe(map(i => i.amount), reduce((acc, one) => acc + one)).subscribe(r => allIncome = r);
      from(this.paybacks).pipe(map(p => p.amount), reduce((acc, one) => acc + one)).subscribe(r => allPayback = r);
      if (allIncome > allPayback) {
        this.interestReady.next('总还款小于借款，请检查输入');
        return;
      }

      const requestData = {
        incomes:
          this.incomes.map((p) => {
            return {date: p.date.format('YYYY-MM-DD'), amount: p.amount};
          }),
        paybacks:
          this.paybacks.map((p) => {
            return {date: p.date.format('YYYY-MM-DD'), amount: p.amount};
          })
      };

      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(requestData));
      }
      else {
        this.ws.onopen = () => {
          this.ws.send(JSON.stringify(requestData));
        };
      }


    });
  }

  get incomes(): PayItemModel[] {
    return this._incomes;
  }

  set incomes(value: PayItemModel[]) {
    this._incomes = value;
    this.itemsChange.next('income');
  }

  removeIncome(index: number) {
    this._incomes.splice(index, 1);
    this.itemsChange.next('income');
  }

  get paybacks(): PayItemModel[] {
    return this._paybacks;
  }

  set paybacks(value: PayItemModel[]) {
    this._paybacks = value;
    this.itemsChange.next('payback');
  }

  removePayback(index: number) {
    this._paybacks.splice(index, 1);
    this.itemsChange.next('payback');
  }

  set inputs(value: {incomes: PayItemModel[], paybacks: PayItemModel[]}) {
    this._incomes = value.incomes;
    this._paybacks = value.paybacks;
    this.itemsChange.next('all');
  }

  private compare(a: PayItemModel, b: PayItemModel): number {
    if (a.date.isBefore(b.date)) {
      return -1;
    } else if (a.date.isSame(b.date)) {
      return 0;
    } else {
      return 1;
    }
  }

  concatIncomes(newIncomes): void {
    this._incomes = this._incomes.concat(newIncomes);
    this._incomes.sort(this.compare);
    this.itemsChange.next('income');
  }

  public concatPaybacks(newPaybacks): void {
    this._paybacks = this._paybacks.concat(newPaybacks);
    this._paybacks.sort(this.compare);
    this.itemsChange.next('payback');
  }

  public calInterestFormEqualItem(amount: number, payback: number, period: number): void {
    if (payback === null || payback === undefined) {
      this.interestReady.next('请输入每月还款');
      return;
    }

    if (period === null || period === undefined) {
      this.interestReady.next('请输入还款期限');
      return;
    }

    if (amount === null || amount === undefined) {
      this.interestReady.next('请输入总借款');
      return;
    }

    if (amount > period * payback) {
      this.interestReady.next('总还款小于借款，请检查输入');
      return;
    }

    const currentDate = moment();
    const incomes: PayItemModel[] = [{date: currentDate.clone(), amount}];
    const paybacks: PayItemModel[] = [];
    for (let i = 0; i < period; i++) {
      currentDate.add(1, 'M');
      paybacks.push({date: currentDate.clone(), amount: payback});
    }
    this.inputs = { incomes, paybacks};
  }

  connectWebSocket() {
    const wsProtocal = 'https:' === window.location.protocol ? 'wss:' : 'ws:';
    const url = wsProtocal + '//' + window.location.host + '/api/ws_cal';
    this.ws = new WebSocket(url);
    this.ws.onmessage = (me: MessageEvent) => {
      const sol: any = JSON.parse(me.data);
      if (sol.success) {
        this.interestReady.next(sol.solStr);
      }
      else {
        this.interestReady.next('计算错误，请检查输入');
      }
    };
    this.ws.onclose = this.interestReady.complete.bind(this);
    this.ws.onerror = this.interestReady.error.bind(this);
  }
}
