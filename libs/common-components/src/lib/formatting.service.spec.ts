import { TestBed } from '@angular/core/testing';

import { FormattingService } from './formatting.service';

describe('FormattingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormattingService = TestBed.inject(FormattingService);
    expect(service).toBeTruthy();
  });
});
