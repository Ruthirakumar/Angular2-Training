import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
 private hotels :any;
  constructor() { }

  ngOnInit() {
  	this.hotels = [{name :'Taj', city : 'Mumbai'},
  				   {name :'Radisson', city :'Chennai' }	]
  	}
  }

