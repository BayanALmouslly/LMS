import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDescriptionsRoutingModule } from './course-descriptions-routing.module';
import { CourseDescriptionsComponent } from './course-descriptions/course-descriptions.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CourseDescriptionsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CourseDescriptionsRoutingModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule, NbUserModule,
  ]
})
export class CourseDescriptionsModule { }
