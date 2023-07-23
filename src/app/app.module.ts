import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserProfileComponent,
    ProductCatalogComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
