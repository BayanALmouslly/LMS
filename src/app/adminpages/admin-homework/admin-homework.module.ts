import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { AdminHomeworkRoutingModule } from './admin-homework-routing.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, NbToastrModule, NbSpinnerModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminHomeworkRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    NbToastrModule,
    NbSpinnerModule,
  ]
})
export class AdminHomeworkModule { }
