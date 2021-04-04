import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new TimerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show default button text', fakeAsync(() => {
    // then
    let actual = '<should be overwritten>';
    service.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBe('Start');
  }));

  it('should asynchronously change button text', waitForAsync(() => {
    // when
    service.onStartOrPause();

    // then
    let actual = '<should be overwritten>';
    service.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBe('Pause');
    // to stop counting
    service.onStartOrPause();
  }));

  it('should asynchronously change button text back to Start after pausing', fakeAsync(() => {
    // when
    service.onStartOrPause();
    service.onStartOrPause();

    // then
    let actual = '<should be overwritten>';
    service.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBe('Start');
  }));

  it('should update converted elapsed text', fakeAsync(() => {
    // when
    service.onStartOrPause();

    tick(600);
    // then
    let actual = 0;
    service.elapsed$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBeGreaterThan(10);
    // turn off counting
    service.onStartOrPause();
  }));

  it('reset should stop counting', fakeAsync(() => {
    // given
    service.onStartOrPause();

    // when
    service.onReset()

    // then
    expect(service.counting).toBeFalse();
    // counting should stop
    tick(600)
    expect(service.counting).toBeFalse();

    // to stop counting
    service.ngOnDestroy();
  }));

  it('reset should change button text', fakeAsync(() => {
    // given
    service.onStartOrPause();
    let actual = '<should be changed in test>';
    service.buttonText$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    service.onReset()

    // then
    expect(actual).toEqual('Start');

    // to stop counting
    service.ngOnDestroy();
  }));

  it('reset should change elapsed to zero', fakeAsync(() => {
    // given
    service.onStartOrPause();
    let actual = -1;
    service.elapsed$.subscribe(newValue => {
      actual = newValue;
    });

    // when
    service.onReset()
    tick(0, {processNewMacroTasksSynchronously: false});
    // then
    expect(actual).toEqual(0);
    // and
    // counting should stop
    tick(20000, {processNewMacroTasksSynchronously: false});
    expect(actual).toEqual(0);
  }));
});
