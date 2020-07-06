import {Component, Input, OnInit} from '@angular/core';
import {PayItemModel} from '../../../model/pay-item.model';
import {PayItemService} from '../../../service/pay-item.service';


@Component({
  selector: 'app-pay-set',
  templateUrl: './pay-set.component.html',
  styleUrls: ['./pay-set.component.scss']
})
export class PaySetComponent implements OnInit {
  payItems: PayItemModel[];
  @Input() itemType: string;
  constructor(private payItemService: PayItemService) {
  }

  ngOnInit(): void {
    this.payItemService.itemsChange.subscribe(it => {
      if (this.itemType === 'income' && (it === 'income' || it === 'all')) {
        this.payItems = this.payItemService.incomes;
      }
      if (this.itemType === 'payback' && (it === 'payback' || it === 'all')) {
        this.payItems = this.payItemService.paybacks;
      }
    });
  }
}
