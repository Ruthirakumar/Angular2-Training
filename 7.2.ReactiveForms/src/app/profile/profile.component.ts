import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

private profileForm : FormGroup;
private firstName : FormControl;
private lastName : FormControl;
  constructor(private loginService:LoginService) { }
  ngOnInit() {
  	this.firstName = new FormControl(this.loginService.user.name, Validators.required);
  	this.lastName = new FormControl(this.loginService.user.surName, [Validators.required,
      Validators.pattern('[a-zA-Z].*'), this.restrictedWords]);
    this.profileForm = new FormGroup({firstName : this.firstName,lastName : this.lastName});
  }
  private restrictedWords(control:FormControl) : {[key :string] : any} {
  return control.value && control.value.includes('foo') ? {'restrictedWords' : 'foo'} : null;
 }
 
  saveProfile(formValues){
    if(this.profileForm.valid){
         this.loginService.updateProfile({ id : 1,name : formValues.firstName,
          surName: formValues.lastName, password:"123"
        });
      }
    }
  validateLastName(){ return this.lastName.valid || this.lastName.untouched;  }

}
