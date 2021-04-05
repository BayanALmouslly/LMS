import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationalUnitComponent } from './educational-unit/educational-unit.component';
import { ActivitiesUnitComponent } from './unit/activities-unit/activities-unit.component';
import { HomeworkUnitComponent } from './unit/homework-unit/homework-unit.component';
import { SelfTestUnitComponent } from './unit/self-test-unit/self-test-unit.component';
import { UnitComponent } from './unit/unit.component';
import { VideosUnitComponent } from './unit/videos-unit/videos-unit.component';

const routes: Routes = [
  {
    path: '',
    component: EducationalUnitComponent
  },
  {
    path: 'unit',
    component: UnitComponent,

  },
  {
    path: 'selftestunit',
    component: SelfTestUnitComponent
  },
  {
    path: 'homeworkunit',
    component: HomeworkUnitComponent
  },
  {
    path: 'activitiesunit',
    component: ActivitiesUnitComponent
  },
  {
    path: 'videosunit',
    component: VideosUnitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationalUnitsRoutingModule { }
