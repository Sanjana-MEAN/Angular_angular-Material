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
  // shopowner: any;
  // coffees: any[] = [];
  // ingredientsVisibity: any;
  // searchedCoffee: any[] = [];
  // wishlist: any;

  constructor(public shopOwnersService:ShopOwnersService, public router:Router ){}
  ngOnInit(): void {
    this.router.navigate(['/allcoffees']);
  };

  onSearch(){
    this.searchEvent.emit(this.enteredValue);
  }

//   ingredients(coffeeId: number){
//     this.ingredientsVisibity[coffeeId] = !this.ingredientsVisibity[coffeeId];
//   }
//   addToCart(coffee: any){
//     console.log('coffee', coffee);
//     let coffeeClone = _.cloneDeep(coffee);
//     let cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     cart.push(coffeeClone);
//     console.log('storage', coffee)
//     localStorage.setItem('cart', JSON.stringify(cart));  
// }
// loadWishlist(){
//   this.wishlist = JSON.parse(localStorage.getItem('wish') || '[]');
// }

// wished(coffee: any){
//  let wishClone = _.cloneDeep(coffee); 
//  let wish = JSON.parse(localStorage.getItem('wish') || '[]');
//  wish.push(wishClone);
//  localStorage.setItem('wish', JSON.stringify(wish));
//   this.wishlist = wish;
// }

//   searchCoffe(searchData: string){
//     this.shopOwnersService.getShopOwnersJson().subscribe(shopowners => {
//       this.shopowner = shopowners;
//       this.coffees = shopowners.reduce((acc: any[], shopowner: any) =>
//         [...acc, ...shopowner.coffees], []);
//       this.coffees.forEach(coffee =>{
//         this.ingredientsVisibity[coffee.id] = false
//       })
//       });
//     this.searchedCoffee = this.coffees.filter(coffee => coffee.style.toLowerCase().includes(searchData.toLowerCase()));
//     // this.router.navigate(['search'])
//   }
}
