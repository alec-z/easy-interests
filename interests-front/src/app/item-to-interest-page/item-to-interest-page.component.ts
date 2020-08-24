import { Component, OnInit } from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-item-to-interest-page',
  templateUrl: './item-to-interest-page.component.html',
  styleUrls: ['./item-to-interest-page.component.scss']
})
export class ItemToInterestPageComponent implements OnInit {
  tabSelectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  tabToComplex(tabGroup: MatTabGroup) {
    tabGroup.selectedIndex = 1;
  }

}
