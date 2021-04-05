import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionsComponent } from './discussions.component';

const routes: Routes = [
  {
    path: '',
    component: DiscussionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule { }
