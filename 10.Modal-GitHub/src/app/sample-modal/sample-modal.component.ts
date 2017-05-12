import { Component, OnInit,Input, Inject, ViewChild, ElementRef } from '@angular/core';
import {JQ_TOKEN} from '../jquery.service';
@Component({
  selector: 'sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.css']
})
export class SampleModalComponent {
 @Input() title:string;
 @Input() modalId:string;
 @ViewChild('modalContainer') el : ElementRef
 constructor(@Inject(JQ_TOKEN) private $:any) { }
 closeModal(){
	this.$(this.el.nativeElement).modal('hide');
  }
}
