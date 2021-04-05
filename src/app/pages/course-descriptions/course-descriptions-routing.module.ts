import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDescriptionsComponent } from './course-descriptions/course-descriptions.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDescriptionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDescriptionsRoutingModule { }
