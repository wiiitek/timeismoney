import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ModalWrapperService } from 'src/app/modal/modal-wrapper.service';

@Component({
  selector: 'app-hourly-rate-edit-icon',
  templateUrl: './hourly-rate-edit-icon.component.html',
  styleUrls: ['./hourly-rate-edit-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourlyRateEditIconComponent {

  constructor(private modalWrapperService: ModalWrapperService) { }

  onRateEditClick(): void {
    //this.modalWrapperService.modal?.open();
    this.modalWrapperService.open();
  }
}
