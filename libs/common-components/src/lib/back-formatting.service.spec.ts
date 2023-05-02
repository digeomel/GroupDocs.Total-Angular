import { TestBed } from '@angular/core/testing';

import { BackFormattingService } from './back-formatting.service';

describe('BackFormattingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackFormattingService = TestBed.inject(BackFormattingService);
    expect(service).toBeTruthy();
  });
});
