import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseEvaluationComponent } from './course-evaluation.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { HomeworkComponent } from './homework/homework.component';
import { SelfTestComponent } from './self-test/self-test.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path: '',
    component: CourseEvaluationComponent
  },
  {
    path: 'finaltest',
    component: FinalTestComponent
  },
  {
    path: 'selftest',
    component: SelfTestComponent
  },
  {
    path: 'homework',
    component: HomeworkComponent
  },
  {
    path: 'Survey',
    component: SurveyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseEvaluationRoutingModule { }
