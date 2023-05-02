import { TestBed } from '@angular/core/testing';

import { RenderPrintService } from './render-print.service';

describe('RenderPrintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenderPrintService = TestBed.inject(RenderPrintService);
    expect(service).toBeTruthy();
  });
});
