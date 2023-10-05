import {Component, OnInit} from '@angular/core';
import {ProductTypes} from "../../../types/product-types";
import {GetProductService} from "../../../shared/services/get-product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
    product: ProductTypes;

    constructor(private getProduct: GetProductService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.product = {
            "id": 0,
            "image": '',
            "title": '',
            "price": 0,
            "description": ''
        }
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
               this.getProduct.getProduct(params['id'])
                   .subscribe({
                       next: (data) => {
                           this.product = data
                       },
                       error: (error) => {
                           this.router.navigate(['/'])
                       }
                   })
            }
        })
    }


}
