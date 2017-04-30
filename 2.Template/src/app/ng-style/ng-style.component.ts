import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html'
})
export class NgStyleComponent  {
isDanger = true;
getStyle() { return { color : 'red'}}
}
