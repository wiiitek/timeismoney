import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-hourly-rate-edit-label',
  templateUrl: './hourly-rate-edit-label.component.html',
  styleUrls: ['./hourly-rate-edit-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourlyRateEditLabelComponent {

  @Input()
  text: string = '';

  constructor(private modalService: ModalService) { }

  onRateEditClick(): void {
    this.modalService.open();
  }
}
