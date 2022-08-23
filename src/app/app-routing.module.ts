import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ProductsComponent } from './product/products.component';
import { ProductdetailsComponent } from './productDetails/productdetails.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
