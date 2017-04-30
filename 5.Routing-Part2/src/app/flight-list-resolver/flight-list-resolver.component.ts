import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-flight-list-resolver',
  templateUrl: './flight-list-resolver.component.html',
  styleUrls: ['./flight-list-resolver.component.css']
})
export class FlightListResolverComponent implements OnInit {
 private flightList;
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
  	this.flightList = this.route.snapshot.data['flightList'];
  }

}
