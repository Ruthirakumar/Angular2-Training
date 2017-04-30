import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import {RouterModule} from '@angular/router';
import {FlightsService } from './flights.service';
import {appRoutes } from '../routes';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ErrorComponent } from './error/error.component';
import {FlightRouteActivatorService} from './flight-route-activator.service';
@NgModule({
  declarations: [AppComponent,FlightsComponent,FlightDetailsComponent, ErrorComponent],
  imports: [BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  providers: [FlightsService,FlightRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
