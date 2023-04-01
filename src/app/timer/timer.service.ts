import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculatorService } from '../calculator/calculator.service';
import { RateService } from '../rate/rate.service';
import { RepeaterService } from '../repeater/repeater.service';

@Injectable()
export class TimerService implements OnDestroy {

  private sumOfElapsed = 0;
  private startedAt = 0;
  private lastUpdated = 0;

  private buttonTextSource = new BehaviorSubject<string>('Start');
  private elapsedMillisSource = new BehaviorSubject<number>(0);

  public counting = false;
  public buttonText$ = this.buttonTextSource.asObservable();
  public hourlyRate$ = this.rateService.hourlyRate$;
  public elapsed$ = this.elapsedMillisSource.asObservable();
  public earned$ = this.elapsed$.pipe(
    map<number, number>((newElapsed: number) => {
      const hourlyRate = this.rateService.getHourlyRate();
      return this.calculatorService.toMoney(newElapsed, hourlyRate);
    })
  );

  constructor(
    private repeaterService: RepeaterService,
    private calculatorService: CalculatorService,
    private rateService: RateService,
  ) { }

  onStartOrPause(): void {
    const startAction = !this.counting;
    if (startAction) {
      this.startedAt = Date.now();
      this.lastUpdated = this.startedAt;

      this.repeaterService.start(this.updateElapsed, this);
      this.buttonTextSource.next('Pause');
      this.counting = true;
    } else {
      const measuredTime = Date.now() - this.startedAt;
      this.sumOfElapsed = this.sumOfElapsed + measuredTime;
      this.elapsedMillisSource.next(this.sumOfElapsed);
      this.repeaterService.stop();
      this.buttonTextSource.next('Start');
      this.counting = false;
    }
  }

  onReset(): void {
    if (this.counting) {
      this.counting = false;
      this.repeaterService.stop();
    }
    this.sumOfElapsed = 0;
    this.elapsedMillisSource.next(0);
    this.buttonTextSource.next('Start');
  }

  ngOnDestroy(): void {
    this.repeaterService.stop();
  }

  private updateElapsed(): void {
    this.lastUpdated = Date.now();
    const delta = this.lastUpdated - this.startedAt;
    const newElapsed = this.sumOfElapsed + delta;
    this.elapsedMillisSource.next(newElapsed);
  }
}
