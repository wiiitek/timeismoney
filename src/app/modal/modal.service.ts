import { Injectable } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: ModalComponent | undefined;

  setModal(modal: ModalComponent) {
    this.modal = modal;
  }

  open() {
    if (this.modal) {
      this.modal.open();
    } else {
      throw new Error("ModalService is not initialized with modal.");
    }
  }
}
