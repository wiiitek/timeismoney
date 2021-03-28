import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedComponent } from './elapsed.component';

describe('ElapsedComponent', () => {
  let component: ElapsedComponent;
  let fixture: ComponentFixture<ElapsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElapsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    expect(compiled.querySelector('.elapsed__time').textContent).toContain('00:01:30');
  });
});
