import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { Observable } from 'rxjs/internal/Observable';
import { TimerService } from './timer/timer.service';

@Component({
  selector: 'app-timeismoney',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild('rateConfigModal') modal: ModalComponent | undefined;

  constructor(private timerService: TimerService) { }

  get elapsed(): Observable<number> {
    return this.timerService.elapsed$;
  }
}
