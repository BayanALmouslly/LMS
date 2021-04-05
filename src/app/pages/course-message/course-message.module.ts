import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseMessageRoutingModule } from './course-message-routing.module';
import { CourseMessageComponent } from './course-message.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({
  declarations: [CourseMessageComponent],
  imports: [
    CommonModule,
    CourseMessageRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule,
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
  ]
})
export class CourseMessageModule { }
