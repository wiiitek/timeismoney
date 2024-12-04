import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedComponent } from './elapsed.component';

describe('ElapsedComponent', () => {
  let component: ElapsedComponent;
  let fixture: ComponentFixture<ElapsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ElapsedComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElapsedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly show elapsed value', () => {
    // given
    component.elapsed = 90_000;

    // when
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // then
    expect(compiled.querySelector('.elapsed__time').textContent).toBe('00:01:30');
  });

  it('should show zero as default value', () => {
    // when
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // then
    expect(compiled.querySelector('.elapsed__time').textContent).toBe('00:00:00');
  });
});
