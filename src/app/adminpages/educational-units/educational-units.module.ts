import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationalUnitsRoutingModule } from './educational-units-routing.module';
import { AddEducationalUnitComponent } from './add-educational-unit/add-educational-unit.component';


@NgModule({
  declarations: [AddEducationalUnitComponent],
  imports: [
    CommonModule,
    EducationalUnitsRoutingModule
  ]
})
export class EducationalUnitsModule { }
