import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeworkComponent } from './admin-homework.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeworkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeworkRoutingModule { }
