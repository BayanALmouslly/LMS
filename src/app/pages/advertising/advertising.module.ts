import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisingComponent } from './advertising.component';
import { AddAdvertisingComponent } from './add-advertising/add-advertising.component';

import { FormsModule as ngFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
@NgModule({
  declarations: [AdvertisingComponent, AddAdvertisingComponent],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    NbCardModule,NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule

  ]
})
export class AdvertisingModule { }
