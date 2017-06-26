import { NgModule }             from '@angular/core'
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { AuthTokenRouting }     from './auth_token_routing.module';
import { Angular2TokenService } from 'angular2-token';

import {
  AuthTokenComponent,
  RegisterComponent,
  SignInComponent,
  SignOutComponent,
  ChangePasswordComponent,
  AccessResourceComponent,
  ValidateTokenComponent
} from './';

@NgModule({
  declarations: [
    AuthTokenComponent,
    RegisterComponent,
    SignInComponent,
    SignOutComponent,
    ChangePasswordComponent,
    AccessResourceComponent,
    ValidateTokenComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule,
    AuthTokenRouting
  ],
  exports: [
    SignOutComponent,
    AuthTokenComponent
  ]
})

export class AuthTokenModule { }
