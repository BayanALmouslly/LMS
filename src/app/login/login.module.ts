import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbActionsModule, NbButtonModule, NbCardModule, NbSelectModule, NbSpinnerModule, NbToastrModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ngFormsModule,
    HttpClientModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    NbToastrModule,
    NbSpinnerModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
