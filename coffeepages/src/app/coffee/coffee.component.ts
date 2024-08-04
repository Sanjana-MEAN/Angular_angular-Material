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
  // coffee: any[] = [];
  coffees: any[] = [];
  displayAllCoffee: boolean = false;
  // coffeeIngredients: boolean = false;
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
    // console.log('coffee', coffee);
    let coffeeClone = _.cloneDeep(coffee);
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(coffeeClone);
    // console.log('storage', coffee);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.show.sendSuccess();
  }

  ingredients(coffeeId: number){
    // this.coffeeIngredients = !this.coffeeIngredients;

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
    this.show.sendSuccess();
  }
  // isInWishlist(coffeeid: any){
  //   const wish = this.loadWishlist();
  //   return wish.some((item: { id: any; }) => item.id === coffeeid);
  // }
}

   