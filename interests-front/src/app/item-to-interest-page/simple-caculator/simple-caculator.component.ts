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
  moreInfo = false;
  interest: string;
  // tslint:disable-next-line:variable-name
  private _period = 36;
  // tslint:disable-next-line:variable-name
  private _feeRate = 0.27;

  get period() {
    return this._period;
  }

  set period(value) {
    this._period = value;
    this.calInterest();
  }

  get feeRate() {
    return this._feeRate;
  }

  set feeRate(value) {
    this._feeRate = value;
    this.calInterest();
  }

  calInterest(): void {
    const amount = 100000.0;
    const payback = amount * this._feeRate / 100 + amount / this._period;
    this.payItemService.calInterestFormEqualItem(amount, payback, this._period);
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
