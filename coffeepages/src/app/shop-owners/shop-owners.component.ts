import { Component} from '@angular/core';
import {ShopOwnersService} from '../shop-owners.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-shop-owners',
  templateUrl: './shop-owners.component.html',
  styleUrls: ['./shop-owners.component.css']
})
export class ShopOwnersComponent implements OnInit{
  shopowners: any[] = [];
  image: any;
  wishlist: any[] = [];

  constructor(private shopOwnersService:ShopOwnersService, public route:Router){}

  ngOnInit(): void{
    this.shopOwnersService.getShopOwnersJson().subscribe(data =>{
      this.shopowners = data;
      this.image = data.image;
     });   
    }

    viewCoffees(id: number): void{
      this.route.navigate(['/coffee', id]);
    } 
  }
  