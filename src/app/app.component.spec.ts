import { TestBed } from '@angular/core/testing';
import { ModalComponent } from 'angular-custom-modal';
import { AppComponent } from './app.component';
import { RateInputComponent } from './rate/rate-input/rate-input.component';
import { RateInfoComponent } from './rate/rate-info/rate-info.component';
import { EarnedComponent } from './earned/earned.component';
import { ElapsedComponent } from './elapsed/elapsed.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      // we could import whole AppModule, but it is better
      // to specify all dependencies directly in declarations
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        RateInputComponent,
        RateInfoComponent,
        TimerComponent,
        ModalComponent,
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
