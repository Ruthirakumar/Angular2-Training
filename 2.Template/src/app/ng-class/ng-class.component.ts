import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: ['.danger {background-color:red}', 
  '.color { color :yellow}']
})
export class NgClassComponent  {
isDanger = true;
getClass() { return {danger : true}}
getClass1() { return 'danger color' }
}
