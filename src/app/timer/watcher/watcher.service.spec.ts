import { TestBed } from '@angular/core/testing';

import { WatcherService } from './watcher.service';

describe('WatcherService', () => {
  let service: WatcherService;

  beforeEach(() => {
    service = new WatcherService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
