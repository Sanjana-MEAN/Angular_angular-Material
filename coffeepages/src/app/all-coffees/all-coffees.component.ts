import { Component,OnInit } from '@angular/core';
import { ShopOwnersService } from '../shop-owners.service';
import { SearchService } from '../search.service';
import { ShowmessageService } from '../showmessage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-all-coffees',
  templateUrl: './all-coffees.component.html',
  styleUrls: ['./all-coffees.component.css']
})
export class AllCoffeesComponent implements OnInit{
  shopowner: any;
  coffees: any[] = [];
  wishlist: any;
  ingredientsVisibity: {[key : number]:boolean} = {};
  searchCoffee: any[] = [];

  constructor(public shopOwnersService: ShopOwnersService, public searchService:SearchService, public show:ShowmessageService){}

  ngOnInit(): void {
    this.shopOwnersService.getShopOwnersJson().subscribe(shopowners => {
      this.shopowner = shopowners;
      this.coffees = shopowners.reduce((acc: any[], shopowner: any) =>
        [...acc, ...shopowner.coffees], []);
      this.coffees.forEach(coffee =>{
        this.ingredientsVisibity[coffee.id] = false
      })
      });
      this.searchService.searchObservable.subscribe(searchedCoffee => {
        this.filteredCoffee(searchedCoffee);
      })
    }
    addToCart(coffee: any){
      console.log('coffee', coffee);
      let coffeeClone = _.cloneDeep(coffee);
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(coffeeClone);
      console.log('storage', coffee)
      localStorage.setItem('cart', JSON.stringify(cart)); 
      this.show.sendSuccess(); 
  }
  loadWishlist(){
    this.wishlist = JSON.parse(localStorage.getItem('wish') || '[]');
  }
  
  wished(coffee: any){
   let wishClone = _.cloneDeep(coffee); 
   let wish = JSON.parse(localStorage.getItem('wish') || '[]');
   wish.push(wishClone);
   localStorage.setItem('wish', JSON.stringify(wish));
    this.wishlist = wish;
    this.show.sendSuccess(); 
  }
  ingredients(coffeeId: number){
    this.ingredientsVisibity[coffeeId] = !this.ingredientsVisibity[coffeeId];
  }
  filteredCoffee(filtred: any){
    this.searchCoffee = this.coffees.filter(coffee => coffee.style.toLowerCase().includes(filtred.toLowerCase())); 
  }
  getCoffeeList(): any[]{
    return this.searchCoffee.length > 0 ? this.searchCoffee : this.coffees;
  }
}


