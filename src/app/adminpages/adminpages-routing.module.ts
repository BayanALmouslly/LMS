import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        .then(m => m.StudentsModule),
    },
    {
      path: 'advertisement',
      loadChildren: () => import('./advertisement/advertisement.module')
        .then(m => m.AdvertisementModule),
    },
    {
      path: 'educationalunits',
      loadChildren: () => import('./educational-units/educational-units.module')
        .then(m => m.EducationalUnitsModule),
    },
    
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpagesRoutingModule { }
