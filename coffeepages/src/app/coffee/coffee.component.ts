import { Component ,OnInit} from '@angular/core';
import { ShopOwnersService } from '../shop-owners.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ShowmessageService } from '../showmessage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{
  shopowner: any;
  coffees: any[] = [];
  displayAllCoffee: boolean = false;
  coffeeIds: number | undefined;
  wishlist: any[] =[];
  isIngredients: boolean = false;
  ingredientsVisibity: {[key : number]:boolean} = {};

  constructor(public shopOwnersService: ShopOwnersService, public activatedRoute: ActivatedRoute, public router: Router, public show:ShowmessageService){}

  ngOnInit(){
    const id = +(this.activatedRoute.snapshot.params['id'] ?? 0);
    if(id){
      this.getShopOwnersCoffee(id);
    }
    else{
     this.displayAllCoffee = true; 
    }
  }

    getShopOwnersCoffee(id: number){
      return this.shopOwnersService.getshopownersById(id).subscribe(shopowners => {
      this.shopowner = shopowners;
      this.coffees = shopowners.coffees;
      this.coffees.forEach(coffee =>{
        this.ingredientsVisibity[coffee.id] = false
      })
      })
  }
  backButton(){
    this.router.navigate(['/shop-owners']);
  }
  addToCart(coffee: any){
    let coffeeClone = _.cloneDeep(coffee);
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(coffeeClone);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.show.addedToCart();
  }

  ingredients(coffeeId: number){
    this.ingredientsVisibity[coffeeId] = !this.ingredientsVisibity[coffeeId];
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
    this.show.wishlisted();
  }
}

   