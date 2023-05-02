import { TestBed } from '@angular/core/testing';
import { ConversionService } from './conversion.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@groupdocs.examples.angular/common-components';

describe('СonversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ConfigService ],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ConversionService = TestBed.inject(ConversionService);
    expect(service).toBeTruthy();
  });
});
