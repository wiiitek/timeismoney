import { Component, ViewEncapsulation } from '@angular/core';
import { TimerComponent } from './timer/timer';

@Component({
  selector: 'app-timeismoney',
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TimerComponent]
})
export class AppComponent { }
