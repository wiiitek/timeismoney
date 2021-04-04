import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { asyncScheduler } from 'rxjs';

import { TimerService } from './timer.service';
import { WatcherService } from './watcher/watcher.service';

describe('TimerService', () => {

  let tested: TimerService;

  beforeEach(() => {
    const watcherService = new WatcherService();
    // for testing we update status every two seconds (fakeAsync will rewind the time for us)
    watcherService.setTimeBetweenExecutions(2_000)
    tested = new TimerService(watcherService);
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });

  it('should show default button text', fakeAsync(() => {
    // when
    let actual = '<should be overwritten>';
    tested.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    // then
    expect(actual).toBe('Start');
  }));

  it('should asynchronously change button text', waitForAsync(() => {
    // given
    let actual = '<should be overwritten>';
    tested.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    tested.onStartOrPause();

    // then
    expect(actual).toBe('Pause');

    // turn off counting
    tested.ngOnDestroy();
  }));

  it('should asynchronously change button text back to Start after pausing', fakeAsync(() => {
    // when
    tested.onStartOrPause();
    tested.onStartOrPause();

    // then
    let actual = '<should be overwritten>';
    tested.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBe('Start');
  }));

  it('reset should stop counting', fakeAsync(() => {
    // given
    tested.onStartOrPause();

    // when
    tested.onReset()

    // then
    expect(tested.counting).toBeFalse();
    // counting should stop
    tick(600)
    expect(tested.counting).toBeFalse();

    // turn off counting
    tested.ngOnDestroy();
  }));

  it('reset should change button text', fakeAsync(() => {
    // given
    tested.onStartOrPause();
    let actual = '<should be changed in test>';
    tested.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    tested.onReset()

    // then
    expect(actual).toEqual('Start');

    // turn off counting
    tested.ngOnDestroy();
  }));

  it('reset should change elapsed to zero', fakeAsync(() => {
    // given
    let actual = 0;
    tested.elapsed$.subscribe(newValue => {
      actual = newValue;
    });
    tested.onStartOrPause();
    // wait over 5 seconds
    tick(5_678);

    // when
    tested.onReset();

    // then
    expect(actual).toEqual(0);
    // and
  }));


  it('should update converted elapsed text', fakeAsync(() => {
    // given
    let actual = 0;
    tested.elapsed$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    tested.onStartOrPause();
    // wait over 5 seconds
    tick(5_678);

    // then
    // but our service updates the value every two seconds... so
    expect(actual).toEqual(4_000);

    // turn off counting
    tested.ngOnDestroy();
  }));

  it('reset does not change elapsed if not counting', () => {
    // given
    let actual = -1;
    tested.elapsed$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    tested.onReset();

    // then
    expect(actual).toEqual(0);
  });

  it('reset does not change button text if not counting', () => {
    // given
    let actual = '<should be changed in test>';
    tested.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    tested.onReset();

    // then
    expect(actual).toEqual('Start');
  });
});
