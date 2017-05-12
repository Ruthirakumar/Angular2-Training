import { Component } from '@angular/core';
import {CustomerService} from './customer.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
constructor(private customerService:CustomerService){}
title = 'app works!';
customerList:any;
getCall(){
	this.customerService.getCustomers().subscribe((customers) => {
		this.customerList = customers 
		});
}
postCall(){
	this.customerService.postCustomer(this.customerList).subscribe();}
}
