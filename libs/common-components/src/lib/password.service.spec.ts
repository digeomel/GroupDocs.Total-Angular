import { TestBed } from '@angular/core/testing';

import { PasswordService } from './password.service';

describe('PasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordService = TestBed.inject(PasswordService);
    expect(service).toBeTruthy();
  });
});
