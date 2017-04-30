import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  
})
export class EventBindingComponent {

num = 0;
increment() {
	this.num += 1;
}
  displayone() {
  	alert(this.num);
  }
  
}
