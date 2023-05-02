import { TestBed } from '@angular/core/testing';

import { FieldService } from './field.service';

describe('FieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldService = TestBed.inject(FieldService);
    expect(service).toBeTruthy();
  });
});
