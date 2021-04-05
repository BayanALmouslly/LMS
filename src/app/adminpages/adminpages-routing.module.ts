import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpagesComponent } from './adminpages.component';

const routes: Routes = [
  {path: '',
  component: AdminpagesComponent,
  children: [
 
    
    {
      path: '',
      redirectTo: 'homepage',
      pathMatch: 'full',
    },
    {
      path: 'students',
      loadChildren: () => import('./students/students.module')
        .then(m => m.StudentsModule),
    },
    {
      path: '**',
     // component: NotFoundComponent,
    },
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpagesRoutingModule { }
