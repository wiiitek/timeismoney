import { Injectable } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';

@Injectable({
  providedIn: 'root'
})
export class ModalWrapperService {

  modal: ModalComponent | undefined;

  constructor() { }

  setModal(modal: ModalComponent) {
    this.modal = modal;
  }

  open() {
    if (this.modal) {
      this.modal.open();
    }
  }

  close() {
    if (this.modal) {
      this.modal.close();
    }
  }
}
