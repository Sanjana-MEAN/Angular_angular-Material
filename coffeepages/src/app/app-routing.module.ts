import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopOwnersComponent } from './shop-owners/shop-owners.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AllCoffeesComponent } from './all-coffees/all-coffees.component';
import { CartComponent} from './cart/cart.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {EmptyComponent} from './empty/empty.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop-owners', component: ShopOwnersComponent },
  { path: 'coffee/:id', component: CoffeeComponent },
  { path: 'allcoffees', component: AllCoffeesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
