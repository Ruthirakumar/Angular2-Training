import { AppComponent } from './app.component';
import {Observable} from 'rxjs/Rx';

describe('AppComponent', () => {
 let appComponent: AppComponent, customerService : any;
 let customerList = {
      'records' :[ {'Name' :'Ruthra', 'Country' :'India', 'City' : 'Chennai'},
      {'Name' :'Gowthami', 'Country' :'India', 'City' : 'Bangalore'},
      {'Name' :'Kumar', 'Country' :'India', 'City' : 'Delhi'}   ]
    };
  beforeEach(() => {
    customerService = {
      getCustomers() {
        return Observable.of(customerList)
      }
    };
    appComponent = new AppComponent(customerService);
    
  });

  it('Customer List', ()=>{
  	appComponent.getCall();
  	expect(appComponent.customerList).toEqual(customerList);
  	});
});
