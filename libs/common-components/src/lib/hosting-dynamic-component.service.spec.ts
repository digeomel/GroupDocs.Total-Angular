import { TestBed } from '@angular/core/testing';

import { HostingDynamicComponentService } from './hosting-dynamic-component.service';

describe('HostingDynamicComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostingDynamicComponentService = TestBed.inject(HostingDynamicComponentService);
    expect(service).toBeTruthy();
  });
});
