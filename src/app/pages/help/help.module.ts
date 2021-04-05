import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { ServiceStudentsComponent } from './service-students/service-students.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [HelpComponent, ServiceStudentsComponent, SupportComponent],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
