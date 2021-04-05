import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';
import { ServiceStudentsComponent } from './service-students/service-students.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent
  },
  {
    path: 'servicestudent',
    component: ServiceStudentsComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
