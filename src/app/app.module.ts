import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TimerComponent } from './timer/timer.component';
import { ElapsedComponent } from './timer/elapsed/elapsed.component';
import { EarnedComponent } from './timer/earned/earned.component';
import { RateService } from './rate/rate.service';
import { RateInputComponent } from './rate/rate-input/rate-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ElapsedComponent,
    EarnedComponent,
    RateInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
