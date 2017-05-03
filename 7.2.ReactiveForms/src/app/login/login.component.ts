import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {IUser} from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user:IUser;
 constructor(private loginService:LoginService, private router:Router) { }
 ngOnInit() { }
 login(loginForm) {	this.user = { id : 1,
 	name : loginForm.userName,	password : loginForm.password};
	if(this.loginService.authenticate(this.user)){
this.router.navigate(['/profile']);
	}
 }

}
