import { TestBed } from '@angular/core/testing';

import { TabActivatorService } from './tab-activator.service';

describe('TabActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabActivatorService = TestBed.inject(TabActivatorService);
    expect(service).toBeTruthy();
  });
});
