import { TestBed } from '@angular/core/testing';

import { PlaceholderService } from './placeholder.service';

describe('PlaceholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceholderService = TestBed.inject(PlaceholderService);
    expect(service).toBeTruthy();
  });
});
