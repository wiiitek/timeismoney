import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

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

  it('should update value from service to component', () => {
    // when
    rateService.setRate('4567');
    fixture.detectChanges();

    // then
    expect(component.rate).toBe(4567);
  });

  it('should update value from component to service', () => {
    // given
    component.onRateChange('7654');

    // when
    const actual = rateService.getHourlyRate();

    // then
    expect(actual).toBe(7654);
  });

  it('should not change rate when rate type is changed', async () => {
    // given:
    component.onRateChange('63764');
    const event = { target: { value: "per-month" } };

    // when
    component.onRateTypeChange(event);

    // then
    expect(component.rate).toBe(63764);
  });
});
