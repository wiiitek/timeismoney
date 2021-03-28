import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ElapsedService } from './elapsed.service';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElapsedComponent {

  @Input()
  set elapsed(elapsed: number) {
    this.elapsedService.elapsed(elapsed);
  };

  get converted(): Observable<String> {
    return this.elapsedService.convertedValue$
  };

  constructor(private elapsedService: ElapsedService) { }

}
