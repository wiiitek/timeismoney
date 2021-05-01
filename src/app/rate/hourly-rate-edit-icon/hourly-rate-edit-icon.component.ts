import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-hourly-rate-edit-icon',
  templateUrl: './hourly-rate-edit-icon.component.html',
  styleUrls: ['./hourly-rate-edit-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourlyRateEditIconComponent {

  constructor(private modalService: ModalService) { }

  onRateEditClick(): void {
    this.modalService.open();
  }
}
