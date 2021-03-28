import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ElapsedService } from './elapsed.service';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.scss'],
  providers: [ElapsedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElapsedComponent {

  @Input()
  label = 'Elapsed';

  @Input()
  set elapsed(value: number | any) {
    this.elapsedService.elapsed(value);
  };

  get converted(): Observable<String> {
    return this.elapsedService.convertedValue$
  };

  constructor(private elapsedService: ElapsedService) { }

}
