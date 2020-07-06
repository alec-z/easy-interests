import {Component, Input, OnInit} from '@angular/core';
import {PayItemModel} from '../../../../model/pay-item.model';
import {PayItemService} from '../../../../service/pay-item.service';

@Component({
  selector: 'app-pay-item',
  templateUrl: './pay-item.component.html',
  styleUrls: ['./pay-item.component.scss']
})
export class PayItemComponent implements OnInit {

  @Input() payItem: PayItemModel;
  @Input() itemType: string;
  @Input() index: number;
  constructor(private payItemService: PayItemService) { }

  ngOnInit(): void {

  }

  onRemove() {
    if (this.itemType === 'income') {
      if (this.payItemService.incomes.length > 1) {
        this.payItemService.removeIncome(this.index);
      }
    }
    else if (this.itemType === 'payback') {
      if (this.payItemService.paybacks.length > 1) {
        this.payItemService.removePayback(this.index);
      }
    }
  }

  itemChanged() {
    this.payItemService.itemsChange.next(this.itemType);
  }

}
