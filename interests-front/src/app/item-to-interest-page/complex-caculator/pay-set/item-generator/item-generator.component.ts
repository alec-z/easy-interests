import {Component, Inject, Input, OnInit} from '@angular/core';
import { Moment } from 'moment';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PayItemModel} from '../../../../model/pay-item.model';
import {PayItemService} from '../../../../service/pay-item.service';

@Component({
  selector: 'app-item-generator',
  templateUrl: './item-generator.component.html',
  styleUrls: ['./item-generator.component.scss']
})
export class ItemGeneratorComponent implements OnInit {
  startDate: Moment;
  amount: number;
  number = 12;
  payType: string;
  step = 'month';
  tmpPayItems: PayItemModel[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private payItemService: PayItemService) {
    this.startDate = data.startDate;
    this.amount = data.amount;
    this.payType = data.payType;
    this.calPayItems();
  }
  ngOnInit(): void {
  }

  calPayItems(): void {
    this.tmpPayItems = [];
    const currentDate = this.startDate.clone();
    if (this.startDate && this.number && this.amount) {
      for (let i = 1; i <= this.number; i++) {
        if (this.step === 'month') {
          currentDate.add(1, 'M');
        }
        else if (this.step === 'year') {
          currentDate.add(1, 'y');
        }
        else if (this.step === 'day') {
          currentDate.add(1, 'd');
        }
        this.tmpPayItems.push({date: currentDate.clone(), amount: this.amount});
      }
    }
  }
  doGenerate(): void {
    if (this.payType === 'income')  {
      this.payItemService.concatIncomes(this.tmpPayItems);
    }
    else if (this.payType === 'payback') {
      this.payItemService.concatPaybacks(this.tmpPayItems);
    }
  }

}
