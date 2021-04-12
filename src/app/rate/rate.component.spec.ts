import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RateComponent } from './rate.component';
import { RateService } from './rate.service';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateComponent ],
      providers: [ RateService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
