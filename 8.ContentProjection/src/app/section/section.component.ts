import { Component, Input } from '@angular/core';
@Component({
  selector: 'section',
  templateUrl: './section.component.html',
})
export class SectionComponent{
@Input() title:any;
}
