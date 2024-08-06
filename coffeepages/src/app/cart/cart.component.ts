import { Component, OnInit } from '@angular/core';
import { ShowmessageService } from '../showmessage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: any[] = [];
  singleCoffee: any;
  cart: any;

  constructor(public show:ShowmessageService){}

  ngOnInit(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = cart;
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeCart(coffeeId: any){
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter((item: { id: any; }) =>{
      return item.id !== coffeeId;
    })
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartItems = cart;
    this.show.sendRemoveSuccess();
  }

}
