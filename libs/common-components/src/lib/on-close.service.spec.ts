import { TestBed } from '@angular/core/testing';

import { OnCloseService } from './on-close.service';

describe('OnCloseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnCloseService = TestBed.inject(OnCloseService);
    expect(service).toBeTruthy();
  });
});
