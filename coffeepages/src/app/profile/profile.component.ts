import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginFormService } from '../login-form.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { IUser } from '../user-module';
import { ShowmessageService } from '../showmessage.service';
import { loginUser } from '../loginInterface';
import { find, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileForm: FormGroup = new FormGroup({});

  genders: any = ['Male','Female','Others','Don\'t Want to Answer'];
  countries: any = ['India','Nepal','Bengladesh','Butan','Maldives','Sri Lanka'];
  states: any = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','ttar Pradesh'];
  email: any;
  edit: boolean = false;
  idfromlogin: any;
 
  constructor(private authService:AuthService, public router:Router, private loginForm:LoginFormService, private show:ShowmessageService){
  }

  ngOnInit(): void {
    
    this.idfromlogin = localStorage.getItem('newloginId');

    console.log('idfromlogin', this.idfromlogin);

    this.profileForm = new FormGroup({
      id: new FormControl(this.idfromlogin),
      firstName : new FormControl(this.authService.getLogin()),
      lastName : new FormControl(''),
      preferedName : new FormControl(''),
      email: new FormControl(''),
      dateOfBirth: new FormControl(''),
      anniversary: new FormControl(''),
      gender: new FormControl(''),
      nationality: new FormControl(''),
      state: new FormControl('')
    });
}
  onSubmit(){
    if(this.profileForm?.valid){
      const formdata : IUser= this.profileForm.value;
      console.log('profileForm.value', formdata.id);
      if(formdata.id === this.idfromlogin){
        this.saveForm(this.profileForm.value);
      }
      else{
        this.updateForm(this.profileForm.value);
      }
    }
  }

  saveForm(formdata: IUser){
    this.loginForm.createProfile(formdata).subscribe(res =>{
      console.log('createProfile', res);    
    });
    this.show.sendSuccess();
    this.router.navigate(['home']);
  }

  updateForm(formdata: IUser){
    console.log('profile', formdata); 
  }
  
  cancel(){
    this.edit = false;
  }
}