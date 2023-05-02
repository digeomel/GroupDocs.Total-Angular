import { TestBed } from '@angular/core/testing';

import { ActiveSignatureService } from './active-signature.service';

describe('ActiveSignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveSignatureService = TestBed.inject(ActiveSignatureService);
    expect(service).toBeTruthy();
  });
});
