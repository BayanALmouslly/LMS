import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentExamComponent } from './student-exam.component';

const routes: Routes = [
  {
    path: '',
    component: StudentExamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentExamRoutingModule { }
