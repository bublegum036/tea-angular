import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductsComponent} from "./products/products.component";
import {Over100symbolsPipe} from "../../shared/pipes/over100symbols.pipe";


@NgModule({
    declarations: [
        ProductCardComponent,
        ProductPageComponent,
        ProductsComponent,
        Over100symbolsPipe
    ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
    ],
    exports: [
        Over100symbolsPipe
    ]
})
export class CatalogModule {
}
