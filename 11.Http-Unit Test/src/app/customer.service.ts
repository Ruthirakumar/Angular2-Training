import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CustomerService {
  constructor(private http:Http) { }
  getCustomers(){
  	return this.http.get("https://www.w3schools.com/angular/customers.php")
  	.map((res:Response) => {return res.json()}).catch(this.handleError);
  }
  postCustomer(customerList)
  {
  	let url = "https://www.w3schools.com/angular/customers.php";
  	let header = new Headers({'content-Type':'application/text'});
  	let options = new RequestOptions({headers : header});
  	return this.http.post(url,JSON.stringify(customerList));
  }
  handleError(error:Response)
  {
  	console.log("HTTP Error : " + JSON.stringify(error));
    return Observable.throw(false);
  } 	}
