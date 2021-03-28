import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

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
});
