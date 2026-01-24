import { describe, it, expect, beforeEach } from 'vitest';

import { WatcherService } from './watcher-service';

describe('WatcherService', () => {
  let tested: WatcherService;

  beforeEach(() => {
    tested = new WatcherService();
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });
});
