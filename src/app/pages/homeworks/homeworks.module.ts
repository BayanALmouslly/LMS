import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { HomeworksComponent } from './homeworks.component';
import { FormsModule as ngFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeworksComponent],
  imports: [
    CommonModule,
    HomeworksRoutingModule,
    ngFormsModule
  ]
})
export class HomeworksModule { }
