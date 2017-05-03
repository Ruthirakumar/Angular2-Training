import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'training',
  templateUrl: './training.component.html',
})
export class TrainingComponent implements OnChanges  {
@Input() courses:any;
@Input() filterBy:string;
@Input() sortBy:string;
visibleCourses = [];
ngOnChanges()
{	if(this.courses)
	{	if(this.filterBy === "Online"){this.visibleCourses = this.courses.filter(item =>
	     {return item.mode === this.filterBy;})	}
		else {this.visibleCourses = this.courses;}
		if(this.sortBy === "feesAsc"){ this.visibleCourses.sort(sortByFeesAsc);	}
		else if(this.sortBy === "feesDesc"){this.visibleCourses.sort(sortByFeesDesc);}	
	}
	function sortByFeesAsc(c1, c2){	return c1.fees-c2.fees;	}
	function sortByFeesDesc(c1, c2){ return c2.fees-c1.fees; }
}}
