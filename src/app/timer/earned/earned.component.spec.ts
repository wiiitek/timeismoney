import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

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

  it('should create board component', fakeAsync(() => {
    // given
    const compiled = fixture.nativeElement;

    // when
    component.earned = 12345;
    fixture.detectChanges();
    // wait two seconds for board to update
    tick(2000);

    const lastDigitEl = compiled.querySelectorAll('.earned__board .letter')[component.boardLength - 1];

    // then
    expect(lastDigitEl.querySelector('.flap.top .text').textContent).toBe('5');
  }));


  it('should correctly compute earned cents to show', () => {
    // when
    component.earned = 123456789;

    // then
    // we show truncated earned cents when number has too many digits for DepartureBoard
    expect(component.earnedCents).toBe(3456789);
  });
});
