import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public flightDetail:any = { 
  	no : 12345,
  	name :'Air India',
  	status : 'Departured'
  }
  diplayCurrentStatus(params){
  	alert(params.status);
  }
}
