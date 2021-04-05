import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePolicyRoutingModule } from './course-policy-routing.module';
import { CoursePolicyComponent } from './course-policy/course-policy.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursePolicyComponent],
  imports: [
    CommonModule,
    CoursePolicyRoutingModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule, NbUserModule,
    FormsModule,
    
  ]
})
export class CoursePolicyModule { }
