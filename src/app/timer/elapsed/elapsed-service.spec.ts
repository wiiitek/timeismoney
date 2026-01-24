import { fakeAsync } from '@angular/core/testing';

import { ElapsedService } from './elapsed-service';

describe('ElapsedService', () => {
  let tested: ElapsedService;

  beforeEach(() => {
    tested = new ElapsedService();
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });

  it('should convert elapsed two minutes', () => {
    // when
    const actual = tested.convert(135_000);

    // then
    expect(actual).toBe('00:02:15');
  });

  it('should convert elapsed 59 minutes', () => {
    // when
    const actual = tested.convert(3_540_000);

    // then
    expect(actual).toBe('00:59:00');
  });

  it('should convert elapsed 60 minutes', () => {
    // when
    const actual = tested.convert(3_600_000);

    // then
    expect(actual).toBe('01:00:00');
  });

  it('should convert elapsed 123 hours', () => {
    // when
    const actual = tested.convert(442_800_000);

    // then
    expect(actual).toBe('123:00:00');
  });


  it('should asynchronously convert elapsed 111 hours, 5 minutes, 3 seconds and 300 millis', fakeAsync(() => {

    // when
    tested.elapsed(399_903_300);

    // then
    let actual = '';
    tested.convertedValue$.subscribe(valuePublishedByComponent => {
      actual = valuePublishedByComponent;
    });

    expect(actual).toBe('111:05:03');
  }));
});
