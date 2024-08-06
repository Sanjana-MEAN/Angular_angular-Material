import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginFormService } from '../login-form.service';
import { ShowmessageService } from '../showmessage.service'; 
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  contactForm: FormGroup = new FormGroup({});

  constructor(public complain: LoginFormService, public show: ShowmessageService){}

  ngOnInit(): void{
    this.contactForm= new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      message : new FormControl('')
    })
  }

  onSubmit(){
    if(this.contactForm.value){
      this.complain.updateContact(this.contactForm.value);
      this.show.sendSuccess();
    }
  }

}
