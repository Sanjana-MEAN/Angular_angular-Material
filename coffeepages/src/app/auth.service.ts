import { Injectable } from '@angular/core';
import { IUser} from './user-module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;
  firstName: string = '';
  password: any;

  constructor() { }
 
  setLogin(firstname: string, password: any){
    this.firstName = firstname;
    this.password = password;
  }
  getLogin(){
    return this.firstName;
  }
  loadProfileDetails(){

  }

  isAuthenticated(){
    return !!(localStorage.getItem('authentication') || localStorage.getItem('newloginId'));
  }
}
