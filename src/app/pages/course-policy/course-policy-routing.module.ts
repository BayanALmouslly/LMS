import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursePolicyComponent } from './course-policy/course-policy.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePolicyRoutingModule { }
