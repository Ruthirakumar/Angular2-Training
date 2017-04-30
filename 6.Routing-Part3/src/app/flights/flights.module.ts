import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import {RouterModule} from '@angular/router';
import {flightRoute} from './flightRoute';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(flightRoute)],
  declarations: [FlightListComponent]
})
export class FlightsModule { }
