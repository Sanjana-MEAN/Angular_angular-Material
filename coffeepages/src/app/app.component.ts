import { Component, OnInit } from '@angular/core';
import { DailogBoxComponent } from './dailog-box/dailog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'coffeepages';

    constructor(private dialog: MatDialog, private router:Router){}
  ngOnInit(): void {
    this.openDialog();
  }
  openDialog(){
    let dialogRef = this.dialog.open(DailogBoxComponent, {
      disableClose: true,
      backdropClass: 'custom-backdrop',
      height: '287px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'login' || result == 'signIn'){
        this.router.navigate(['login']);
      }
    });
    
    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    //   if(result){
    //     // this.router.navigate(['login']);
    //   }
    //   else{
    //     // this.router.navigate(['login']);
    //   }
    // });
    
    // dialogRef.close('Pizza!');
  }
  
}
