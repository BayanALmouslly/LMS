import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { AdminpagesRoutingModule } from './adminpages-routing.module';
import { AdminpagesComponent } from './adminpages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbToastrModule, NbUserModule } from '@nebular/theme';
import { EducationalUnitsComponent } from './educational-units/educational-units.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../login/auth.interceptor';
import { AdminHomeworkComponent } from './admin-homework/admin-homework.component';


@NgModule({
  declarations: [AdminpagesComponent, EducationalUnitsComponent, WelcomeComponent, AdminHomeworkComponent],
  imports: [
    CommonModule,
    AdminpagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    NbToastrModule,
    NbSpinnerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
})
export class AdminpagesModule { }
