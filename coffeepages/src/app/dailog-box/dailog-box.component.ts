import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.css']
})
export class DailogBoxComponent {
  open: any;
  constructor(private router:Router,public dialogRef: MatDialogRef<DailogBoxComponent>){}
  login(){
    this.dialogRef.close('login');
  }
  
}
