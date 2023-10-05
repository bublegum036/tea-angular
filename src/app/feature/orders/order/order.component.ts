import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {GetProductService} from "../../../shared/services/get-product.service";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
    errorFormSubmit: boolean = false;


    public orderFormGroup = this.fb.group({
        product: {value: '', disabled: true},
        name: ['', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-Z]+$/)]],
        last_name: ['', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-Z]+$/)]],
        phone: ['', [Validators.required, Validators.pattern(/^(\+)?\d{11}$/)], Validators.maxLength(12)],
        country: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/)]],
        zip: ['', Validators.required, Validators.pattern(/^\d{6}$/)],
        address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9\s\-\/]+$/)]],
        comment: ['']
    })

    public subscriptionSendOrder: Subscription | null = null;

    constructor(public fb: FormBuilder, private activatedRoute: ActivatedRoute, private getProductsService: GetProductService, private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params['product']) {
                this.orderFormGroup.patchValue({
                    product: (params['product']).toString()
                });
            }
        })
    }

    ngOnDestroy() {
        this.subscriptionSendOrder?.unsubscribe()
    }

    public sendOrderToServer() {
        this.subscriptionSendOrder = this.getProductsService.sendOrder({
            product: this.orderFormGroup.get('product')?.value || '',
            name: this.orderFormGroup.get('name')?.value || '',
            last_name: this.orderFormGroup.get('last_name')?.value || '',
            phone: this.orderFormGroup.get('phone')?.value || '',
            country: this.orderFormGroup.get('country')?.value || '',
            zip: this.orderFormGroup.get('zip')?.value || '',
            address: this.orderFormGroup.get('address')?.value || '',
            comment: this.orderFormGroup.get('comment')?.value || '',
        })
            .subscribe(response => {
                if (response.success && !response.message) {
                    console.log('Спасибо за заказ!');
                    this.router.navigate(['/success'])
                } else {
                    this.errorFormSubmit = true;
                }
            })
    }
}
