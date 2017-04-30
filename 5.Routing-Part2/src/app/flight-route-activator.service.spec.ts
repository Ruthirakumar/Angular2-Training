/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightRouteActivatorService } from './flight-route-activator.service';

describe('FlightRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightRouteActivatorService]
    });
  });

  it('should ...', inject([FlightRouteActivatorService], (service: FlightRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
