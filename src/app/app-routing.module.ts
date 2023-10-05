import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./feature/mains/main/main.component";
import {ProductsComponent} from "./feature/catalog/products/products.component";
import {OrderComponent} from "./feature/orders/order/order.component";
import {ProductPageComponent} from "./feature/catalog/product-page/product-page.component";
import {SuccessComponent} from "./feature/orders/success/success.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
