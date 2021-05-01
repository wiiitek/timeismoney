import { TestBed } from '@angular/core/testing';

import { ModalWrapperService } from './modal-wrapper.service';

describe('ModalService', () => {
  let service: ModalWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
