import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';

import { AppComponent } from './app.component';

import { Rate2Component } from './rate2/rate2.component';
import { TimerComponent } from './timer/timer.component';
import { ElapsedComponent } from './timer/elapsed/elapsed.component';
import { EarnedComponent } from './timer/earned/earned.component';
import { RateComponent } from './rate/rate.component';
import { RateService } from './rate/rate.service';
import { HourlyRateEditLabelComponent } from './rate/hourly-rate-edit-label/hourly-rate-edit-label.component';

@NgModule({
  declarations: [
    AppComponent,
    Rate2Component,
    TimerComponent,
    ElapsedComponent,
    EarnedComponent,
    RateComponent,
    HourlyRateEditLabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule
  ],
  providers: [RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
