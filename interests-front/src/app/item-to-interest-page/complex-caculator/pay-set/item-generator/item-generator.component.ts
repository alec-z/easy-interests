import {Component, Inject, Input, OnInit} from '@angular/core';
import { Moment } from 'moment';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PayItemModel} from '../../../../model/pay-item.model';

@Component({
  selector: 'app-item-generator',
  templateUrl: './item-generator.component.html',
  styleUrls: ['./item-generator.component.scss']
})
export class ItemGeneratorComponent implements OnInit {
  startDate: Moment;
  amount: number;
  number: number;
  step = 'month';
  tmpPayItems: PayItemModel[];
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.startDate = data.startDate;
    this.amount = data.amount;
  }
  ngOnInit(): void {
  }

  calPayItems(): void {
    this.tmpPayItems = [];
    const currentDate = this.startDate;
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

}
