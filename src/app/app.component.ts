import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  @ViewChild('rateConfigModal') modal: ModalComponent | undefined;

  constructor(private modalService: ModalService) { }

  ngAfterViewInit() {
    if (this.modal) {
      this.modalService.setModal(this.modal);
    }
  }
}
