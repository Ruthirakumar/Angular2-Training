import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {IUser} from '../user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user:IUser;
 constructor(private loginService:LoginService) { }
 ngOnInit() { }
 login(loginForm) {	this.user = { id : 1,
 	name : loginForm.userName,	password : loginForm.password};
	this.loginService.authenticate(this.user);
 }

}
