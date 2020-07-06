import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';


import {FormControl} from '@angular/forms';
import {PayItemModel} from '../../model/pay-item.model';
import {PayItemService} from '../../service/pay-item.service';

@Component({
  selector: 'app-simple-caculator',
  templateUrl: './simple-caculator.component.html',
  styleUrls: ['./simple-caculator.component.scss'],
  providers: [PayItemService]
})
export class SimpleCaculatorComponent implements OnInit {
  interest: string;
  // tslint:disable-next-line:variable-name
  private _amount = 500000;
  // tslint:disable-next-line:variable-name
  private _period = 36;
  // tslint:disable-next-line:variable-name
  private _payback = 15238.88;

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
    this.calInterest();
  }

  get period() {
    return this._period;
  }

  set period(value) {
    this._period = value;
    this.calInterest();
  }

  get payback() {
    return this._payback;
  }

  set payback(value) {
    this._payback = value;
    this.calInterest();
  }

  calInterest(): void {
    this.payItemService.calInterestFormEqualItem(this.amount, this.payback, this.period);
  }



  constructor(private payItemService: PayItemService) { }

  ngOnInit(): void {
    this.payItemService.interestReady.subscribe((r) => {
      this.interest = r;
      console.log(r);
    });
    this.calInterest();

  }


}
