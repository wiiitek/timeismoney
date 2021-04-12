import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RateComponent } from './rate.component';
import { RateService } from './rate.service';

describe('RateComponent', () => {
  let component: RateComponent;
  let service: RateService;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule,
        ReactiveFormsModule,],
      declarations: [RateComponent],
      providers: [RateService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(RateService);
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value from service', async () => {

    // when
    service.setHourlyRate('4567');
    fixture.detectChanges();

    // https://codecraft.tv/courses/angular/unit-testing/asynchronous/#_code_async_code_and_code_whenstable_code
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // then
      const inputElement = fixture.debugElement.query(By.css('.rate__input'));
      expect(inputElement.nativeElement.value).toContain('4567');
    });
  })

  it('should update from component to service', async () => {

    // given
    component.onRateChange('7654');

    // when
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(7654);
  })
});
