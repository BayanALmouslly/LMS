import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ShowExamsComponent } from './show-exams/show-exams.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, NbToastrModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ShowAnswersComponent } from './show-answers/show-answers.component';


@NgModule({
  declarations: [AddExamComponent, ShowExamsComponent, ShowAnswersComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
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
export class ExamsModule { }
