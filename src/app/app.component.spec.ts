import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ModalComponent } from 'angular-custom-modal';
import { AppComponent } from './app.component';
import { HourlyRateEditLabelComponent } from './rate/hourly-rate-edit-label/hourly-rate-edit-label.component';
import { EarnedComponent } from './timer/earned/earned.component';
import { ElapsedComponent } from './timer/elapsed/elapsed.component';
import { TimerComponent } from './timer/timer.component';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      // we could import whole AppModule, but it is better
      // to specify all dependencies directly in declarations 
      imports: [],
      declarations: [
        AppComponent,
        TimerComponent,
        ModalComponent,
        HourlyRateEditLabelComponent,
        ElapsedComponent,
        EarnedComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('timeismoney');
  });
});
