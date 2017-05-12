import { CustomerService } from './customer.service';
import {Observable} from 'rxjs/Rx';

describe('CustomerService', () => {
 let customerService : CustomerService, mockHttp,customerList;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get','post']);
    customerService = new CustomerService(mockHttp);
    customerList = {
    	'records' :[ {'Name' :'Ruthra', 'Country' :'India', 'City' : 'Chennai'},
    	{'Name' :'Gowthami', 'Country' :'India', 'City' : 'Bangalore'},
    	{'Name' :'Kumar', 'Country' :'India', 'City' : 'Delhi'}  	]
    }
  });

  it('getCustomers Test', ()=>{
  	mockHttp.get.and.returnValue(Observable.of({}));
  	customerService.getCustomers();
  	expect(mockHttp.get).toHaveBeenCalledWith('https://www.w3schools.com/angular/customers.php');
  	});
  it('postCustomers Test', ()=>{
  	mockHttp.post.and.returnValue(Observable.of(false));
  	customerService.postCustomer({});
  	expect(mockHttp.post).toHaveBeenCalledWith('https://www.w3schools.com/angular/customers.php', "{}");
  	});

});
