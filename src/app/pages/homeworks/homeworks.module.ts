import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { HomeworksComponent } from './homeworks.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NbSpinnerModule } from '@nebular/theme';


@NgModule({
  declarations: [HomeworksComponent],
  imports: [
    CommonModule,
    HomeworksRoutingModule,
    ngFormsModule,
    NbSpinnerModule

  ]
})
export class HomeworksModule { }
