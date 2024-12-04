import { Component, ViewEncapsulation } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
    selector: 'app-timeismoney',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TimerComponent]
})
export class AppComponent { }
