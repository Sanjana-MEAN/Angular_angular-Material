import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShopOwnersService } from '../shop-owners.service';
import { Router } from '@angular/router';
import * as _ from 'lodash'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  enteredValue: any;
  @Output() searchEvent= new EventEmitter<any>();

  constructor(public shopOwnersService:ShopOwnersService, public router:Router ){}
  ngOnInit(): void {
    this.router.navigate(['/allcoffees']);
  };

  onSearch(){
    this.searchEvent.emit(this.enteredValue);
  }

}
