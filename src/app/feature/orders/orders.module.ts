import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrderComponent} from "./order/order.component";
import {SuccessComponent} from "./success/success.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        OrderComponent,
        SuccessComponent

    ],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        ReactiveFormsModule,

    ]
})
export class OrdersModule {
}
