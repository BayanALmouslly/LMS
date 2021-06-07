import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentExamRoutingModule } from './student-exam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentExamRoutingModule,
    FormsModule,
 ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentExamModule { }
