import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
 
    {
      path: 'homepage',
      loadChildren: () => import('./home-pages/home-pages.module')
        .then(m => m.HomePagesModule),
    },
    {
      path: 'educationalunit',
      loadChildren: () => import('./educational-units/educational-units.module')
        .then(m => m.EducationalUnitsModule),
    },
    {
      path: 'courses',
      loadChildren: () => import('./course-descriptions/course-descriptions.module')
        .then(m => m.CourseDescriptionsModule),
    },
    {
      path: 'coursePolicy',
      loadChildren: () => import('./course-policy/course-policy.module')
        .then(m => m.CoursePolicyModule),
    },
    {
      path: 'advertising',
      loadChildren: () => import('./advertising/advertising.module')
        .then(m => m.AdvertisingModule),
    },
    {
      path: 'CourseEvaluation',
      loadChildren: () => import('./course-evaluation/course-evaluation.module')
        .then(m => m.CourseEvaluationModule),
    },
    {
      path: 'CourseMessage',
      loadChildren: () => import('./course-message/course-message.module')
        .then(m => m.CourseMessageModule),
    },
    {
      path: 'discussions',
      loadChildren: () => import('./discussions/discussions.module')
        .then(m => m.DiscussionsModule),
    },
    {
      path: 'help',
      loadChildren: () => import('./help/help.module')
        .then(m => m.HelpModule),
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
