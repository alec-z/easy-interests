import { Component, OnInit } from '@angular/core';
import {PayItemModel} from '../../model/pay-item.model';
import {PayItemService} from '../../service/pay-item.service';

@Component({
  selector: 'app-complex-caculator',
  templateUrl: './complex-caculator.component.html',
  styleUrls: ['./complex-caculator.component.scss']
})
export class ComplexCaculatorComponent implements OnInit {
  interest: string;
  incomes: PayItemModel[];
  paybacks: PayItemModel[];

  constructor(private payItemService: PayItemService) {
  }

  ngOnInit(): void {
    this.payItemService.calInterestFormEqualItem(500000, 201400, 3);
    const paybacks = this.payItemService.paybacks;
    paybacks[0].amount = 1400;
    paybacks[1].amount = 201400;
    paybacks[2].amount = 301400;
    this.payItemService.paybacks = paybacks;
    this.payItemService.interestReady.subscribe(r => {
      this.interest = r;
    });
  }

}
