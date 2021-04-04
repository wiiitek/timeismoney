import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedComponent } from './earned.component';

describe('EarnedComponent', () => {
  let component: EarnedComponent;
  let fixture: ComponentFixture<EarnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarnedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly format numeric value', () => {
    // given
    const compiled = fixture.nativeElement;

    // when
    component.earned = 1209;
    // > fixture.detectChanges() works ONLY the first time with ChangeDetectionStrategy.OnPush and karma reports
    // https://medium.com/@juliapassynkova/how-to-test-onpush-components-c9b39871fe1e#06d6
    fixture.detectChanges();

    // then
    expect(compiled.querySelector('.earned__whole-number').textContent).toBe('012');
    // and
    expect(compiled.querySelector('.earned__cents').textContent).toBe('09');
  });
});
