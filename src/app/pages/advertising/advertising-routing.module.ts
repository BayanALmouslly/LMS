import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdvertisingComponent } from './add-advertising/add-advertising.component';
import { AdvertisingComponent } from './advertising.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisingComponent
  },
  {
    path: 'add',
    component: AddAdvertisingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingRoutingModule { }
