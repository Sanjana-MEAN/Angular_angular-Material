import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NativeDateAdapter} from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShopOwnersComponent } from './shop-owners/shop-owners.component';
import { ShowmessageService } from './showmessage.service';

import { ShopOwnersService} from './shop-owners.service';
import { CoffeeComponent } from './coffee/coffee.component';
import { AllCoffeesComponent } from './all-coffees/all-coffees.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { EmptyComponent } from './empty/empty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthService} from './auth.service';
import { LoginComponent } from './login/login.component';
import { DailogBoxComponent } from './dailog-box/dailog-box.component';
import { SearchComponent } from './search/search.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopOwnersComponent,
    CoffeeComponent,
    AllCoffeesComponent,
    CartComponent,
    WishlistComponent,
    EmptyComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    DailogBoxComponent,
    SearchComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    ShopOwnersService,
    AuthService,
    ShowmessageService,
    MatSnackBar
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule {}

