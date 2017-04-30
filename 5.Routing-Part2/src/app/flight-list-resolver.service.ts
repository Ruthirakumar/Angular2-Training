import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {FlightsService } from './flights.service';
@Injectable()
export class FlightListResolver implements Resolve<any> {
  constructor(private flightService :FlightsService ) { }
  resolve(){
  	return this.flightService.getFlightObservable().map(list => list);
  }

}
