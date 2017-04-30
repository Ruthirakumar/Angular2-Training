import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../flights.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
flight:any;
  constructor(private flightService:FlightsService, private route:ActivatedRoute,
  	private router:Router) { }
  ngOnInit() {
  	this.flight = this.flightService.getFlightDetails(this.route.snapshot.params["id"]);
  }
  gotoFlightList(){
  	this.router.navigate(['/flights']);
  }
}
