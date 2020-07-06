import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemToInterestPageComponent } from './item-to-interest-page/item-to-interest-page.component';
import { InterestToItemPageComponent } from './interest-to-item-page/interest-to-item-page.component';
import {AppMaterialModule} from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GameComponent } from './game/game.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleCaculatorComponent } from './item-to-interest-page/simple-caculator/simple-caculator.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PayItemService} from './service/pay-item.service';
import {HttpClientModule} from '@angular/common/http';
import { ComplexCaculatorComponent } from './item-to-interest-page/complex-caculator/complex-caculator.component';
import { PaySetComponent } from './item-to-interest-page/complex-caculator/pay-set/pay-set.component';
import { PayItemComponent } from './item-to-interest-page/complex-caculator/pay-set/pay-item/pay-item.component';
import { ItemGeneratorComponent } from './item-to-interest-page/complex-caculator/pay-set/item-generator/item-generator.component';

export const MY_MAT_MOMENT_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ItemToInterestPageComponent,
    InterestToItemPageComponent,
    GameComponent,
    SimpleCaculatorComponent,
    ComplexCaculatorComponent,
    PaySetComponent,
    PayItemComponent,
    ItemGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    AppMaterialModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_MAT_MOMENT_DATE_FORMATS},
    {provide: LOCALE_ID, useValue: 'zh-cn' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
