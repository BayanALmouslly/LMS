import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworksComponent } from './homeworks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeworksComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
