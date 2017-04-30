import {Routes} from '@angular/router';
import {HotelsComponent} from './app/hotels/hotels.component';
import {HotelDetailsComponent} from './app/hotel-details/hotel-details.component';
export const appRoute : Routes = [
{path :'flight', loadChildren:'app/flights/flights.module#FlightsModule'},
{path:'hotel', component:HotelsComponent},
{path:'hotel/:name', component:HotelDetailsComponent}]
