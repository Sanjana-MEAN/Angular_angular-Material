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
  // enteredValue: any;
  // @Output() searchEvent =new  EventEmitter<any>();
  enteredValue: any;

  constructor(public authService:AuthService, public searchService:SearchService, public router:Router){}

  onSearch(enteredValue: any){
    this.searchService.searchData(enteredValue);
    this.router.navigate(['allcoffees']);
  }

//   Onsearch(enteredValue: any){
//     this.searchEvent.emit(enteredValue);
    
//   }

}
