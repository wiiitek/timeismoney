import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';

@Component({
  selector: 'app-timeismoney',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild('rateConfigModal') modal: ModalComponent | undefined;

  constructor() { }
}
