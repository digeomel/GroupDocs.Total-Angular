import { TestBed } from '@angular/core/testing';

import { SignatureTabActivatorService } from './signature-tab-activator.service';

describe('SignatureTabActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignatureTabActivatorService = TestBed.inject(SignatureTabActivatorService);
    expect(service).toBeTruthy();
  });
});
