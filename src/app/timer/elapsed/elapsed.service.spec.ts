import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ElapsedService } from './elapsed.service';

describe('ElapsedService', () => {
  let service: ElapsedService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    service = new ElapsedService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert elapsed two minutes', () => {
    // when
    let actual = service.convert(135_000);

    // then
    expect(actual).toBe('00:02:15');
  });

  it('should convert elapsed 59 minutes', () => {
    // when
    let actual = service.convert(3_540_000);

    // then
    expect(actual).toBe('00:59:00');
  });

  it('should convert elapsed 60 minutes', () => {
    // when
    let actual = service.convert(3_600_000);

    // then
    expect(actual).toBe('01:00:00');
  });

  it('should convert elapsed 123 hours', () => {
    // when
    let actual = service.convert(442_800_000);

    // then
    expect(actual).toBe('123:00:00');
  });


  it('should asynchronously convert elapsed 111 hours, 5 minutes, 3 seconds and 300 millis', fakeAsync(() => {

    // when
    service.elapsed(399_903_300);

    // then
    let actual = '<should be overwritten>';
    service.convertedValue$.subscribe(newValue => {
      actual = newValue;
    });

    expect(actual).toBe('111:05:03');
  }));
});
