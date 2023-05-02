import { TestBed } from '@angular/core/testing';

import { ParserConfigService } from './parser-config.service';

describe('ParserConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParserConfigService = TestBed.inject(ParserConfigService);
    expect(service).toBeTruthy();
  });
});
