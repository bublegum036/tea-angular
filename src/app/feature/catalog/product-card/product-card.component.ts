import {Component, Input, OnInit} from '@angular/core';
import {ProductTypes} from "../../../types/product-types";
import {ActivatedRoute, Router} from "@angular/router";
import {GetProductService} from "../../../shared/services/get-product.service";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input() product: ProductTypes;

    constructor(private getProduct: GetProductService, private router: Router) {
        this.product = {
            "id": 0,
            "image": '',
            "title": '',
            "price": 0,
            "description": ''
        }
    }
    ngOnInit() {

    }
    goToProduct(id: number) {
        const product =  this.getProduct.getProduct(this.product.id)
        if (product) {
            this.router.navigate(['/product', id])
        }
    }
}
