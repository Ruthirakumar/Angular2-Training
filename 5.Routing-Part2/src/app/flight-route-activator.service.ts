import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import {FlightsService } from './flights.service';
@Injectable()
export class FlightRouteActivatorService implements CanActivate {

  constructor(private router:Router,private flightService:FlightsService) { }
  canActivate(route:ActivatedRouteSnapshot ){
  	if(route.params['id'] == 1){
  		this.router.navigate(['/error']);
  	}
  	else {
  		return true;
  	}
  }

}
