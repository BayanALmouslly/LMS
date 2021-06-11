import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { AdminpagesComponent } from './adminpages.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '',
  component: AdminpagesComponent,
  children: [
    
    
    {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'students',
      loadChildren: () => import('./students/students.module')
        .then(m => m.StudentsModule), //canActivate: [AuthGuard]
    },
    {
      path: 'advertisement',
      loadChildren: () => import('./advertisement/advertisement.module')
        .then(m => m.AdvertisementModule), //canActivate: [AuthGuard]
    },
    {
      path: 'educationalunits',
      loadChildren: () => import('./educational-units/educational-units.module')
        .then(m => m.EducationalUnitsModule), //canActivate: [AuthGuard]
    },
    {
      path: 'exams',
      loadChildren: () => import('./exams/exams.module')
        .then(m => m.ExamsModule), //canActivate: [AuthGuard]
    },
    {
      path: 'adminhomework',
      loadChildren: () => import('./admin-homework/admin-homework.module')
        .then(m => m.AdminHomeworkModule), //canActivate: [AuthGuard]
    },
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpagesRoutingModule { }
