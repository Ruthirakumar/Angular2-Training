import { Injectable } from '@angular/core';

@Injectable()
export class FlightService {
getFlight() {
 	return {
 		name : "Air India",
 		status : "Arrived",
 		no: 12345
 	}
 }
}
