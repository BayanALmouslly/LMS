import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpagesRoutingModule } from './adminpages-routing.module';
import { AdminpagesComponent } from './adminpages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { EducationalUnitsComponent } from './educational-units/educational-units.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [AdminpagesComponent, EducationalUnitsComponent, WelcomeComponent],
  imports: [
    CommonModule,
    AdminpagesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class AdminpagesModule { }
