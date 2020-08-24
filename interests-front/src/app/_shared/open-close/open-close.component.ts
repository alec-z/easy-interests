import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      transition(':enter', animate(0)),
      transition('* => *', [
        animate('0.5s ease-in-out')
      ])

    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  @Input() isOpen = false;
  constructor() { }
  ngOnInit(): void {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
