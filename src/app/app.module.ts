import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';

import { AppComponent } from './app.component';

import { RateInputComponent } from './rate/rate-input/rate-input.component';
import { RateInfoComponent } from './rate/rate-info/rate-info.component';
import { TimerComponent } from './timer/timer.component';
import { ElapsedComponent } from './timer/elapsed/elapsed.component';
import { EarnedComponent } from './timer/earned/earned.component';
import { RateService } from './rate/rate.service';

@NgModule({
  declarations: [
    AppComponent,
    RateInputComponent,
    RateInfoComponent,
    TimerComponent,
    ElapsedComponent,
    EarnedComponent,
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
