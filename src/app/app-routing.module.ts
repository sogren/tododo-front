import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';
import { TasksComponent }       from './tasks/tasks.component';
import { AuthTokenComponent }   from './auth';
import { SignInComponent }      from './auth';
import { RegisterComponent }    from './auth';
import { ChangePasswordComponent }   from './auth';
import { SignOutComponent }     from './auth';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'sign-in',    component: SignInComponent },
  { path: 'register',   component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'sign-out',   component: SignOutComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks',      component: TasksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
