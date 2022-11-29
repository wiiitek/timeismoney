import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-hourly-rate-edit-label',
  templateUrl: './hourly-rate-edit-label.component.html',
  styleUrls: ['./hourly-rate-edit-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourlyRateEditLabelComponent {

  constructor(private modalService: ModalService) { }

  onRateEditClick(): void {
    this.modalService.open();
  }
}
