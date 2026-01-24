import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Earned } from './earned';

describe('Earned', () => {
  let component: Earned;
  let fixture: ComponentFixture<Earned>;

  beforeEach(() => {
    // Mock DepartureBoard globally
    (globalThis as any).DepartureBoard = function () {};
    (globalThis as any).DepartureBoard.prototype.setValue = vi.fn();

    TestBed.configureTestingModule({
      imports: [Earned]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Earned);
    component = fixture.componentInstance;
  });

  it('should convert value for the board component', () => {
    // when
    component.earned = 12345;
    fixture.detectChanges();

    // then
    expect(DepartureBoard.prototype.setValue).toHaveBeenCalledWith('  123.45');
  });

  it('should correctly compute earned cents to show', () => {
    // when
    component.earned = 123456789;

    // then
    // we show truncated earned cents when number has too many digits for DepartureBoard
    expect(component.earnedCents).toBe(3456789);
  });
});
