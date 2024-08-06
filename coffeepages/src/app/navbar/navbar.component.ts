import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  enteredValue: any;
  sidenavMode: 'side' | 'over' = 'side';
  sidenavOpened: boolean = true;

  constructor(public authService:AuthService, public searchService:SearchService, public router:Router){}

  onSearch(enteredValue: any){
    this.searchService.searchData(enteredValue);
    this.router.navigate(['allcoffees']);
  }

  toggle(){
    if (this.sidenavMode === 'side') {
      this.sidenavMode = 'over'; 
      this.sidenavOpened = false; 
    } else {
      this.sidenavMode = 'side'; 
      this.sidenavOpened = true; 
    }
  }

}
