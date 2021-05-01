import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from 'angular-custom-modal';

import { HourlyRateEditIconComponent } from './hourly-rate-edit-icon.component';

describe('HourlyRateEditIconComponent', () => {
  let component: HourlyRateEditIconComponent;
  let fixture: ComponentFixture<HourlyRateEditIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyRateEditIconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRateEditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw exception if modal is missing', () => {
    expect(component.onRateEditClick).toThrow();
  })

});
