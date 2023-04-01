import { fakeAsync, tick } from '@angular/core/testing';
import { RepeaterService } from './repeater.service';

class Stub {
  value: number = 0

  increase(): void {
    this.value = this.value + 1;
  }
}

describe('RepeaterService', () => {

  let tested: RepeaterService;

  beforeEach(() => {
    tested = new RepeaterService();
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });

  it('should repeat the given task', fakeAsync(() => {
    const stub = new Stub();

    // when
    tested.start(stub.increase, stub);
    // wait over 5 seconds
    tick(5_678);
    tested.stop()

    // then
    expect(stub.value).toEqual(5);
  }));
});
