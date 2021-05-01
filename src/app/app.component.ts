import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { ModalWrapperService } from './modal/modal-wrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  @ViewChild('rateConfigModal') modal: ModalComponent | undefined;

  constructor(private modalWrapperService: ModalWrapperService) { }

  ngAfterViewInit() {
    if (this.modal) {
      this.modalWrapperService.setModal(this.modal);
    }
  }
}
