import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
 private flights;
  constructor() { }

  ngOnInit() {
  	this.flights = [{id:1,name :"Air India",theme :"Red", country : "India"},
		   {id:2,name :"British Airways", theme:"white", country:"United Kingdom"},
		   {id:3,name :"Lufthansa Airways",theme:"Yellow", country:"German"}]

  }

}
