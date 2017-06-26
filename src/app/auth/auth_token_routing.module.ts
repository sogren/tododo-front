import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }         from './sign-in';
import { RegisterComponent }       from './register';
import { ChangePasswordComponent } from './change-password';
import { SignOutComponent }        from './sign-out';

const auth_token_routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sign-in',         component: SignInComponent },
  { path: 'register',        component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'sign-out',        component: SignOutComponent },
];

export const AuthTokenRouting = RouterModule.forChild(auth_token_routes);
