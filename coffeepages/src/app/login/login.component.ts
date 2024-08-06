import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginFormService } from '../login-form.service';
import { Router } from '@angular/router';
import { loginUser } from '../loginInterface';
import * as _ from 'lodash';
import { ShowmessageService } from '../showmessage.service';
import { filter, find, map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  firstname: string='';
  password: string='';
  mouseoverLogin: any = ''
  isPasswordTouched: boolean= false;
  loginDetails: any;
  userEnteredFirstName: string = '';
  userEnteredPassword: any = ''

  constructor(private authService: AuthService,private router: Router, private loginService: LoginFormService,public show:ShowmessageService){
  }

  async ngOnInit(): Promise<void> {
    await this.loginService.loginData().subscribe((data: loginUser)=>{
      this.loginDetails = data;
    });
  }  

  async login(loginForms: any){

    this.userEnteredFirstName = loginForms.firstname;
    this.userEnteredPassword = loginForms.password;
    await this.loginService.loginData().forEach(async users => {
      const existingUser = await users['find']((user: { firstname: string; password: any; }) => user.firstname === this.userEnteredFirstName && user.password === this.userEnteredPassword)

      if(existingUser){
        localStorage.setItem('authentication', existingUser);
        this.router.navigate(['home']);					
      }
      else{
        const newUser= {
          firstname: this.userEnteredFirstName, password: this.userEnteredPassword  
        };

        this.loginService.submitLogin(newUser).subscribe((res: loginUser) => {
          localStorage.setItem('newloginId', res.id);
          this.router.navigate(['profile']);
        this.authService.setLogin(this.userEnteredFirstName, this.userEnteredPassword);
        this.show.sendSuccess();
      }) 
      }  
    })  
  }
  
  cancel(){
    this.router.navigate(['home']);
  }
  onPasswordFocus(){
   this.isPasswordTouched = true; 
  }

}
