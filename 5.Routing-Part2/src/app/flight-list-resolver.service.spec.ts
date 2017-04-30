/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightListResolverService } from './flight-list-resolver.service';

describe('FlightListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightListResolverService]
    });
  });

  it('should ...', inject([FlightListResolverService], (service: FlightListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
