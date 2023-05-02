import { TestBed } from '@angular/core/testing';

import { DragSignatureService } from './drag-signature.service';

describe('DragSignatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragSignatureService = TestBed.inject(DragSignatureService);
    expect(service).toBeTruthy();
  });
});
