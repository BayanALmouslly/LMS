import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationalUnitsRoutingModule } from './educational-units-routing.module';
import { EducationalUnitComponent } from './educational-unit/educational-unit.component';
import { UnitComponent } from './unit/unit.component';
import { ActivitiesUnitComponent } from './unit/activities-unit/activities-unit.component';
import { VideosUnitComponent } from './unit/videos-unit/videos-unit.component';
import { HomeworkUnitComponent } from './unit/homework-unit/homework-unit.component';
import { SelfTestUnitComponent } from './unit/self-test-unit/self-test-unit.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';


@NgModule({
  declarations: [EducationalUnitComponent, UnitComponent, ActivitiesUnitComponent, VideosUnitComponent, HomeworkUnitComponent, SelfTestUnitComponent],
  imports: [
    CommonModule,
    EducationalUnitsRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     NbAccordionModule,
     NbButtonModule,
     NbCardModule,
     NbListModule,
     NbRouteTabsetModule,
     NbStepperModule,
     NbTabsetModule, NbUserModule,
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
})
export class EducationalUnitsModule { }
