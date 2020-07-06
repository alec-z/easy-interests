import { Component, OnInit } from '@angular/core';
import {PayItemService} from '../../service/pay-item.service';
import {PayItemModel} from '../../model/pay-item.model';

@Component({
  selector: 'app-complex-caculator',
  templateUrl: './complex-caculator.component.html',
  styleUrls: ['./complex-caculator.component.scss'],
  providers: [PayItemService]
})
export class ComplexCaculatorComponent implements OnInit {
  interest: string;
  incomes: PayItemModel[];
  paybacks: PayItemModel[];

  constructor(private payItemService: PayItemService) {
  }

  ngOnInit(): void {
    this.payItemService.calInterestFormEqualItem(30000, 10020, 3);
    const paybacks = this.payItemService.paybacks;
    paybacks[1].amount = 31000;
    this.payItemService.paybacks = paybacks;
    this.payItemService.interestReady.subscribe(r => {
      this.interest = r;
    });
  }

}
