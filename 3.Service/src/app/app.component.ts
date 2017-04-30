import { Component } from '@angular/core';
import {FlightService} from './flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  flight:any;
  constructor(private flightService : FlightService){ }
  ngOnInit(){
  	this.flight = this.flightService.getFlight();
  }
}
