import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ElapsedService } from './elapsed.service';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.scss'],
  providers: [ElapsedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe]
})
export class ElapsedComponent {

  @Input()
  set elapsed(value: number | null) {
    if (value != null) {
      this.elapsedService.elapsed(value);
    }
  }

  get converted(): Observable<string> {
    return this.elapsedService.convertedValue$;
  }

  constructor(private elapsedService: ElapsedService) { }

}
