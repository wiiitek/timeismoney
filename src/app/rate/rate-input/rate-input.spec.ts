import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RateInput } from './rate-input';
import { RateService } from '../rate-service';

describe('RateInput', () => {
  let rateService: RateService;
  let component: RateInput;
  let fixture: ComponentFixture<RateInput>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RateInput],
      providers: [RateService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RateInput);
    component = fixture.componentInstance;
    rateService = fixture.debugElement.injector.get(RateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value from service', fakeAsync(() => {

    // when
    rateService.setRate('4567');
    fixture.detectChanges();
    // https://codecraft.tv/courses/angular/unit-testing/asynchronous/#_fakeasync_and_tick
    tick();

    // then
    const inputElement = fixture.debugElement.query(By.css('.rate-input__value input'));
    expect(inputElement.nativeElement.value).toBe('4567');
  }));

  it('should update from component to service', () => {
    // given
    component.onRateChange('7654');

    // when
    const actual = rateService.getHourlyRate();

    // then
    expect(actual).toBe(7654);
  });

  it('should not change rate when rate type is changed', waitForAsync(() => {
    // given:
    const event = { target: { value: "per-month" } };

    // when
    component.onRateTypeChange(event);
    fixture.detectChanges();

    // https://codecraft.tv/courses/angular/unit-testing/asynchronous/#_async_and_whenstable
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // then
      const inputElement = fixture.debugElement.query(By.css('.rate-input__value input'));
      expect(inputElement.nativeElement.value).toBe('100');
    });
  }));
});
