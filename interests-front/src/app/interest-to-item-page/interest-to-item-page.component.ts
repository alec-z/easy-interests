import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-interest-to-item-page',
  templateUrl: './interest-to-item-page.component.html',
  styleUrls: ['./interest-to-item-page.component.scss']
})
export class InterestToItemPageComponent implements OnInit {
  amount: number;
  annualInterest: number;
  period: number;
  payback: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  inputChanged() {
    if (this.amount === null || this.amount === undefined) {
      return;
    }
    if (this.annualInterest === null || this.annualInterest === undefined) {
      return;
    }
    if (this.period === null || this.period === undefined) {
      return;
    }
    this.http
      .post<string>('/api/cal_item', {amount: this.amount, annualInterest: this.annualInterest, period: this.period}).subscribe(p => this.payback = p);
  }

}
