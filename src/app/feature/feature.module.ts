import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeatureRoutingModule} from './feature-routing.module';
import {CatalogModule} from "./catalog/catalog.module";
import {MainComponent} from "./mains/main/main.component";
import {PopupComponent} from "./mains/popup/popup.component";
import {OrdersModule} from "./orders/orders.module";
import {MainsModule} from "./mains/mains.module";


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CatalogModule,
        OrdersModule,
        MainsModule,
        FeatureRoutingModule,
    ]
})
export class FeatureModule {
}
