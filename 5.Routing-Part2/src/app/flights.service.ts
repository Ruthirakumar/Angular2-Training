import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class FlightsService {
flights = [{id:1,name :"Air India",theme :"Red", country : "India"},
		   {id:2,name :"British Airways", theme:"white", country:"United Kingdom"},
		   {id:3,name :"Lufthansa Airways",theme:"Yellow", country:"German"}]

getFlightObservable() {
  let subject = new Subject();
  setTimeout(() => {subject.next(this.flights);	subject.complete();},2000);
  return subject;
}
getFlightList(){return this.flights;}

getFlightDetails(id){	return this.flights.find(flight => flight.id == id);}
  
}
