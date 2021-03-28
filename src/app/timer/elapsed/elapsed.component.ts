import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ElapsedService } from './elapsed.service';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElapsedComponent {

  private _elapsed = 0;

  @Input()
  set elapsed(elapsed: number) {
    this._elapsed = elapsed ? elapsed : 0;

    this.elapsedService.elapsed(this._elapsed);
  };

  get converted(): Observable<String> {
    return this.elapsedService.convertedValue$
  };

  constructor(private elapsedService: ElapsedService) { }

}
