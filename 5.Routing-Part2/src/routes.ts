import {Routes} from '@angular/router';
import {FlightsComponent} from './app/flights/flights.component';
import { FlightDetailsComponent } from './app/flight-details/flight-details.component';
import {ErrorComponent} from './app/error/error.component';
import {FlightRouteActivatorService} from './app/flight-route-activator.service';
import {FlightListResolverComponent} from './app/flight-list-resolver/flight-list-resolver.component';
import { FlightListResolver } from './app/flight-list-resolver.service';
export const appRoutes:Routes =[
	{path :"flights", component: FlightsComponent},
	{path:"flight/:id",component:FlightDetailsComponent, canActivate:[FlightRouteActivatorService]},
	{path:"error",component:ErrorComponent,canDeactivate :['canDeactivateErrorPage']},
	{path:'flightListResolver', component:FlightListResolverComponent,
	resolve :{flightList : FlightListResolver }},
	{path:"",redirectTo:"/flights", pathMatch:'full'}
]
