import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class LoginService {
public isAuthenticated : boolean;
public user :IUser;
  constructor() { }
  authenticate(user:IUser) : boolean  {
  	this.user = user;
  	this.isAuthenticated = user.name  == 'ruthra' && user.password == '123' ;
  	return this.isAuthenticated;  }
  	
  updateProfile(user:IUser){
  	this.user = user;  }
}
