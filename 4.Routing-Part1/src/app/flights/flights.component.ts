import { Component, OnInit } from '@angular/core';
import {FlightsService } from '../flights.service';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
private flights:any;
  constructor(private flightService:FlightsService) { }
  ngOnInit() {
  	this.flights = this.flightService.getFlightList();
  }
}
