import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // we could import whole AppModule, but it is better
      // to specify all dependencies directly in declarations
      imports: [
        BrowserModule,
        FormsModule,
        AppComponent,
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
