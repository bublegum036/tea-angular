import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductTypes} from "../../types/product-types";

@Injectable({
    providedIn: 'root'
})
export class GetProductService {

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<ProductTypes[]> {
        return this.http.get<ProductTypes[]>('https://testologia.site/tea')
    }

    getProduct(id: number) {
        return this.http.get<ProductTypes>(`https://testologia.site/tea?id=${id}`)
    }

    sendOrder(data : {
        name: string,
        last_name: string,
        phone: string,
        country: string,
        zip: string,
        product: string,
        address: string,
        comment?: string,
    }) {
        return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data)
    }
}
