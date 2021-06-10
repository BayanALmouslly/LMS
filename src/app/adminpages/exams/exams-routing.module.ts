import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ShowAnswersComponent } from './show-answers/show-answers.component';
import { ShowExamsComponent } from './show-exams/show-exams.component';

const routes: Routes = [
  {
    path: '',
    component: ShowExamsComponent
  },
  {
    path: 'add',
    component: AddExamComponent
  },
  {
    path: 'showanswer',
    component: ShowAnswersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
