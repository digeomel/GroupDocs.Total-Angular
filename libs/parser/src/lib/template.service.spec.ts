import { TestBed } from '@angular/core/testing';

import { TemplateService } from './template.service';

describe('TemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateService = TestBed.inject(TemplateService);
    expect(service).toBeTruthy();
  });
});
