import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of, find} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopOwnersService {

  constructor(public http:HttpClient) { }

  getShopOwnersJson(): Observable<any>{
    return this.http.get<any []>('assets/shopowners.json');
  } 

  getshopownersById(id: number): Observable<any>{
    return this.getShopOwnersJson().pipe(map(shopowners => {
      const shopowner = shopowners.find((shopowner: { id: number; }) => shopowner.id === id);
      console.log('yes', shopowner);
      return shopowner || {};
      }
    ));
    }  
  }
