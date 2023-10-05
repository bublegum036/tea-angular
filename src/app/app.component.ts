import {Component, OnInit} from '@angular/core';
import 'bootstrap'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Чай';

    constructor() {
    }

    ngOnInit() {
    }
}

