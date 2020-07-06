import { Component } from '@angular/core';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  faCalculator = faCalculator;
  title = 'interests-front2';

}
