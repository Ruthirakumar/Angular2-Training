import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'child',
  template: `<br> Child Component:<div>{{flight.no}}</div><div>{{flight.name}}</div>
<button (click)="displayStatus()">Display Status </button>`,
styles :['button { background-color: red }']

})
export class ChildComponent  {
  @Input() flight:any;
  @Output() alertStatus = new EventEmitter();
  displayStatus() {
  	this.alertStatus.emit({status : this.flight.status })
  }
  displayNumber() {
  	alert(this.flight.no);
  }
}
