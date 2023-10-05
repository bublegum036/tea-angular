import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription, timer} from "rxjs";

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit ,OnDestroy {

    @ViewChild('popupElement')
    private popupElement!: ElementRef;

    constructor() {

    }

    private subscriptionPopupVisible: Subscription | null = null;


    ngOnInit() {
        this.subscriptionPopupVisible = timer(3000).subscribe(()=> {
            this.popupElement.nativeElement.classList.add('modal-products');
        })
    }

    ngOnDestroy() {
        this.subscriptionPopupVisible?.unsubscribe()
    }

    closePopup() {
        this.popupElement.nativeElement.classList.add('close')
    }

}
