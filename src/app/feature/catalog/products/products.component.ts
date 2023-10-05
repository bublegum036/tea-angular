import {Component, OnInit} from '@angular/core';
import {ProductTypes} from "../../../types/product-types";
import {GetProductService} from "../../../shared/services/get-product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    constructor(private getProductsService: GetProductService, private router: Router) {
    }

    products: ProductTypes[] = [];

    ngOnInit() {
        this.getProductsService.getProducts()
            .subscribe({
                next: (data) => {
                    this.products = data
                },
                error: (error) => {
                    console.log(error)
                    this.router.navigate(['/'])
                }
            })
    }
}
