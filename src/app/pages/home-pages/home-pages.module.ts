import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [StartComponent, HomeComponent],
  imports: [
    CommonModule,
    HomePagesRoutingModule
  ]
})
export class HomePagesModule { }
