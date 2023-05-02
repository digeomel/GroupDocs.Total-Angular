import { TestBed } from '@angular/core/testing';

import { ZoomService } from './zoom.service';

describe('ZoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoomService = TestBed.inject(ZoomService);
    expect(service).toBeTruthy();
  });
});
