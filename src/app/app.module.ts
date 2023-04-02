import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';

import { AppComponent } from './app.component';

import { TimerComponent } from './timer/timer.component';
import { ElapsedComponent } from './timer/elapsed/elapsed.component';
import { EarnedComponent } from './timer/earned/earned.component';
import { RateComponent } from './rate/rate.component';
import { RateInputComponent } from './rate/rate-input.component';
import { RateService } from './rate/rate.service';
import { HourlyRateEditLabelComponent } from './rate/hourly-rate-edit-label/hourly-rate-edit-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ElapsedComponent,
    EarnedComponent,
    RateComponent,
    RateInputComponent,
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
