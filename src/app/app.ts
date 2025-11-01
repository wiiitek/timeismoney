import { Component, ViewEncapsulation } from '@angular/core';
import { Timer } from './timer/timer';

@Component({
  selector: 'app-timeismoney',
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [Timer]
})
export class App { }
