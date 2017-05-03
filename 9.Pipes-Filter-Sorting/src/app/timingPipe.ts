import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name :'timing'})
export class timingPipe implements PipeTransform {
	transform(value:string){
		if(value == 'Online') {	return value + " 7 AM to 9 AM on WeekDays";	}
		else if(value == 'ClassRoom'){ return value + " 9 AM to 5 PM on WeekEnd"}
		else { 	return value;}
	} }