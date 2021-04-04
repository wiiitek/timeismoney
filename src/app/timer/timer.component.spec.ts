import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
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

    // when
    component.onStartOrPause();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    // then
    expect(compiled.querySelector('.timer__main_button').textContent).toBe('Pause');
    // turn off counting
    component.onStartOrPause();
  }));
});
