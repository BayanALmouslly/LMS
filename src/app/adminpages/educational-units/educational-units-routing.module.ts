import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEducationalUnitComponent } from './add-educational-unit/add-educational-unit.component';
import { EducationalUnitsComponent } from './educational-units.component';

const routes: Routes = [
  {
    path: '',
    component: EducationalUnitsComponent
  },
  {
    path: 'add',
    component: AddEducationalUnitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationalUnitsRoutingModule { }
