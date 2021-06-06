import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentExamRoutingModule } from './student-exam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentExamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbUserModule,
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentExamModule { }
