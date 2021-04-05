import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseEvaluationRoutingModule } from './course-evaluation-routing.module';
import { CourseEvaluationComponent } from './course-evaluation.component';
import { SelfTestComponent } from './self-test/self-test.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { HomeworkComponent } from './homework/homework.component';
import { SurveyComponent } from './survey/survey.component';


@NgModule({
  declarations: [CourseEvaluationComponent, SelfTestComponent, FinalTestComponent, HomeworkComponent, SurveyComponent],
  imports: [
    CommonModule,
    CourseEvaluationRoutingModule
  ]
})
export class CourseEvaluationModule { }
