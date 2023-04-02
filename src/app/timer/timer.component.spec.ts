import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RateInputComponent } from '../rate/rate-input/rate-input.component';
import { RateService, RateType } from '../rate/rate.service';
import { EarnedComponent } from './earned/earned.component';
import { ElapsedComponent } from './elapsed/elapsed.component';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let rateService: RateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        TimerComponent,
        RateInputComponent,
        ElapsedComponent,
        EarnedComponent,
    ],
      providers: [RateService],
    })
      .compileComponents();

    rateService = TestBed.inject(RateService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the button should say Start at the beginning', () => {
    // when
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // then
    expect(compiled.querySelector('.timer__main_button').textContent).toBe('Start');
  });


  it('button should change text when clicked', waitForAsync(() => {
    // given
    const compiled = fixture.nativeElement;

    // when
    component.onStartOrPause();
    fixture.detectChanges();

    // then
    expect(compiled.querySelector('.timer__main_button').textContent).toBe('Pause');
    // turn off counting
    component.onStartOrPause();
  }));

  it('reset should change button text', fakeAsync(() => {
    // given
    const compiled = fixture.nativeElement;
    component.onStartOrPause();
    tick(1234);

    // when
    component.onReset();

    // then
    expect(compiled.querySelector('.timer__main_button').textContent).toBe('Start');
  }));

  it('reset should change timer to zero', fakeAsync(() => {
    // given
    let actual = -1;
    component.elapsed.subscribe(
      newValue => actual = newValue
    );
    component.onStartOrPause();
    tick(1234);

    // when
    component.onReset();

    // then
    expect(actual).toBe(0);
  }));

  it('swith to monthly rate type should change displayed rate', () => {
    // given:
    const precision = 10;
    let actual = null;
    component.hourlyRate.subscribe(
      newValue => actual = newValue
    );

    // when
    rateService.setRateType(RateType.PER_MONTH);

    //then
    expect(actual).toBeCloseTo(0.595238095238, precision);
  })
});
