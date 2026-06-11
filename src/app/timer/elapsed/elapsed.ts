import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ElapsedService } from './elapsed-service';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.html',
  styleUrls: ['./elapsed.scss'],
  providers: [ElapsedService],
  encapsulation: ViewEncapsulation.None,
  // starting from Angular version 22 changeDetection `OnPush` is the default
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe]
})
export class Elapsed {
  private readonly elapsedService = inject(ElapsedService);


  @Input()
  set elapsed(value: number | null) {
    if (value != null) {
      this.elapsedService.elapsed(value);
    }
  }

  get converted(): Observable<string> {
    return this.elapsedService.convertedValue$;
  }

}
