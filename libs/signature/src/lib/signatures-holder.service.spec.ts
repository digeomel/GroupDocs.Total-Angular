import { TestBed } from '@angular/core/testing';

import { SignaturesHolderService } from './signatures-holder.service';

describe('SignaturesHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignaturesHolderService = TestBed.inject(SignaturesHolderService);
    expect(service).toBeTruthy();
  });
});
