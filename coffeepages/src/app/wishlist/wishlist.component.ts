import { Component, OnInit } from '@angular/core';
import { ShowmessageService } from '../showmessage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
constructor(public show:ShowmessageService){}

  cartItems: any[] = [];
  ngOnInit(): void {
    const wish = JSON.parse(localStorage.getItem('wish') || '[]');
    this.cartItems = wish;
  }
  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('wish') || '[]');
  }
  removeWished(coffeeId: any){
      console.log('coddeid', coffeeId);
      let wish = JSON.parse(localStorage.getItem('wish') || '[]');
      wish = wish.filter((item: { id: any; }) =>{
        return item.id !== coffeeId;
      })
      localStorage.setItem('wish', JSON.stringify(wish));
      this.cartItems = wish;
      this.show.sendRemoveSuccess();
  }

}
