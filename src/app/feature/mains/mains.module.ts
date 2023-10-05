import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsRoutingModule } from './mains-routing.module';
import {MainComponent} from "./main/main.component";
import {PopupComponent} from "./popup/popup.component";


@NgModule({
  declarations: [
      MainComponent,
      PopupComponent
  ],
  imports: [
    CommonModule,
    MainsRoutingModule
  ]
})
export class MainsModule { }
