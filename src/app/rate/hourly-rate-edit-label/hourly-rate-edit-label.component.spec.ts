import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from 'angular-custom-modal';

import { HourlyRateEditLabelComponent } from './hourly-rate-edit-label.component';

describe('HourlyRateEditIconComponent', () => {
  let component: HourlyRateEditLabelComponent;
  let fixture: ComponentFixture<HourlyRateEditLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyRateEditLabelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRateEditLabelComponent);
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
