// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'products', component: ProductCatalogComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // redirige a 'products' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
