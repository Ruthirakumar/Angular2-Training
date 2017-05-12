import { Component, Inject } from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 constructor(@Inject(JQ_TOKEN) private $:any){}
 openModal(){
  	this.$("#myModal").modal({});
  } 
}
