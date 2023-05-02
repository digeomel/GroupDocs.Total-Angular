import { TestBed } from '@angular/core/testing';

import { DocumentPageService } from './document-page.service';

describe('DocumentPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentPageService = TestBed.inject(DocumentPageService);
    expect(service).toBeTruthy();
  });
});
