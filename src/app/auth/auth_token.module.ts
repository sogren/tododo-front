import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        AuthTokenComponent,
        RegisterComponent,
        SignInComponent,
        ChangePasswordComponent,
        SignOutComponent,
        AccessResourceComponent,
        ValidateTokenComponent
    ],
    exports: [
        AuthTokenComponent,
        SignOutComponent
    ]
})
export class AuthTokenModule { }
