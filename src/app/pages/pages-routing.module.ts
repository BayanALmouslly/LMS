import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
 
    {
      path: 'homepage',
      loadChildren: () => import('./home-pages/home-pages.module')
        .then(m => m.HomePagesModule), canActivate: [AuthGuard]
    },
    {
      path: 'educationalunit',
      loadChildren: () => import('./educational-units/educational-units.module')
        .then(m => m.EducationalUnitsModule),canActivate: [AuthGuard]
    },
    {
      path: 'courses',
      loadChildren: () => import('./course-descriptions/course-descriptions.module')
        .then(m => m.CourseDescriptionsModule),canActivate: [AuthGuard]
    },
    {
      path: 'exam',
      loadChildren: () => import('./student-exam/student-exam.module')
        .then(m => m.StudentExamModule),canActivate: [AuthGuard]
    },
    {
      path: 'coursePolicy',
      loadChildren: () => import('./course-policy/course-policy.module')
        .then(m => m.CoursePolicyModule),canActivate: [AuthGuard]
    },
    {
      path: 'advertising',
      loadChildren: () => import('./advertising/advertising.module')
        .then(m => m.AdvertisingModule),canActivate: [AuthGuard]
    },
    {
      path: 'CourseEvaluation',
      loadChildren: () => import('./course-evaluation/course-evaluation.module')
        .then(m => m.CourseEvaluationModule),canActivate: [AuthGuard]
    },
    {
      path: 'CourseMessage',
      loadChildren: () => import('./course-message/course-message.module')
        .then(m => m.CourseMessageModule),canActivate: [AuthGuard]
    },
    {
      path: 'discussions',
      loadChildren: () => import('./discussions/discussions.module')
        .then(m => m.DiscussionsModule),canActivate: [AuthGuard]
    },
    {
      path: 'help',
      loadChildren: () => import('./help/help.module')
        .then(m => m.HelpModule),canActivate: [AuthGuard]
    },

    {
      path: 'marks',
      loadChildren: () => import('./marks/marks.module')
        .then(m => m.MarksModule),
    },
    {
      path: 'tools',
      loadChildren: () => import('./tools/tools.module')
        .then(m => m.ToolsModule),
    },
  
    {
      path: '',
      redirectTo: 'homepage',
      pathMatch: 'full',
    },
    {
      path: '**',
     // component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
