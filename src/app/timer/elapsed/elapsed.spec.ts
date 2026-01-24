import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elapsed } from './elapsed';

describe('Elapsed', () => {
  let component: Elapsed;
  let fixture: ComponentFixture<Elapsed>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Elapsed]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Elapsed);
    component = fixture.componentInstance;
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
