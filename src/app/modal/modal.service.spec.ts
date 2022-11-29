import { TestBed } from '@angular/core/testing';
import { ModalComponent } from 'angular-custom-modal';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let dummyModalComponent = { open: () => { } } as ModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw exception if modal is missing', () => {
    expect(service.open).toThrow();
  })

  it('should call service if modal is initilized when icon is clicked', () => {
    // given
    service.setModal(dummyModalComponent);
    const modalComponentSpy = spyOn(dummyModalComponent, 'open');

    // when
    service.open();

    // then
    expect(modalComponentSpy).toHaveBeenCalledTimes(1);
  })
});
