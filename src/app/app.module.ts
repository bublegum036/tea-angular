import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {FeatureModule} from "./feature/feature.module";
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        ReactiveFormsModule,
        SharedModule,
        FeatureModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
