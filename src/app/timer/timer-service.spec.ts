import { vi } from 'vitest';

import { RateService } from '../rate/rate-service';
import { CalculatorService } from './calculator/calculator-service';

import { TimerService } from './timer-service';
import { WatcherService } from './watcher/watcher-service';
import { TestBed } from '@angular/core/testing';

describe('TimerService', () => {

  let tested: TimerService;

  // use Angular's inject mechanism for dependencies

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WatcherService,
        CalculatorService,
        RateService,
        TimerService,
      ],
    });

    // for testing we update status every two seconds (fakeAsync will rewind the time for us)
    const watcherService = TestBed.inject(WatcherService);
    watcherService.setTimeBetweenExecutions(2_000);

    tested = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });

  it('should show default button text', () => {
    vi.useFakeTimers();
    // when
    let actual = '';
    tested.buttonText$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });

    // then
    expect(actual).toBe('Start');
  });

  it('should asynchronously change button text', () => {
    // given
    let actual = '';
    tested.buttonText$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });

    // when
    tested.onStartOrPause();

    // then
    expect(actual).toBe('Pause');
  });

  it('should asynchronously change button text back to Start after pausing', () => {
    vi.useFakeTimers();
    tested.onStartOrPause();
    tested.onStartOrPause();
    let actual = '';
    tested.buttonText$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    expect(actual).toBe('Start');
    vi.useRealTimers();
  });

  it('reset should stop counting', () => {
    vi.useFakeTimers();
    tested.onStartOrPause();
    tested.onReset();
    expect(tested.counting).toBeFalsy();
    vi.advanceTimersByTime(600);
    expect(tested.counting).toBeFalsy();
    vi.useRealTimers();
  });

  it('reset should change button text', () => {
    vi.useFakeTimers();
    tested.onStartOrPause();
    let actual = '<should be changed in test>';
    tested.buttonText$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    tested.onReset();
    expect(actual).toEqual('Start');
    vi.useRealTimers();
  });

  it('reset should change elapsed to zero', () => {
    vi.useFakeTimers();
    let actual = 0;
    tested.elapsed$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    tested.onStartOrPause();
    vi.advanceTimersByTime(5678);
    tested.onReset();
    expect(actual).toEqual(0);
    vi.useRealTimers();
  });


  it('should update converted elapsed text', () => {
    vi.useFakeTimers();
    let actual = 0;
    tested.elapsed$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    tested.onStartOrPause();
    vi.advanceTimersByTime(5678);
    expect(actual).toEqual(4000);
    tested.ngOnDestroy();
    vi.useRealTimers();
  });

  it('reset does not change elapsed if not counting', () => {
    // given
    let actual = -1;
    tested.elapsed$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });

    // when
    tested.onReset();

    // then
    expect(actual).toEqual(0);
  });

  it('reset does not change button text if not counting', () => {
    // given
    let actual = '<should be changed in test>';
    tested.buttonText$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });

    // when
    tested.onReset();

    // then
    expect(actual).toEqual('Start');
  });

  it('resuming timer should not clear current value', () => {
    vi.useFakeTimers();
    let actual = 0;
    tested.elapsed$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    tested.onStartOrPause();
    vi.advanceTimersByTime(2300);
    tested.onStartOrPause();
    vi.advanceTimersByTime(123456);
    tested.onStartOrPause();
    vi.advanceTimersByTime(5400);
    tested.onStartOrPause();
    vi.advanceTimersByTime(123456);
    expect(actual).toEqual(7700);
    vi.useRealTimers();
  });

  it('should correctly reset timer after pausing', () => {
    vi.useFakeTimers();
    let actual = 999999;
    tested.elapsed$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });
    tested.onStartOrPause();
    vi.advanceTimersByTime(10000);
    tested.onStartOrPause();
    vi.advanceTimersByTime(4000);
    tested.onReset();
    vi.advanceTimersByTime(3000);
    tested.onStartOrPause();
    vi.advanceTimersByTime(3000);
    expect(actual).toEqual(2000);
    tested.ngOnDestroy();
    vi.useRealTimers();
  });
});
