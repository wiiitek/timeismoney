import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RateService } from '../rate/rate.service';
import { EarnedComponent } from '../earned/earned.component';
import { ElapsedComponent } from '../elapsed/elapsed.component';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimerComponent,
        ElapsedComponent,
        EarnedComponent,
    ],
      providers: [RateService],
    })
      .compileComponents();
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
});
