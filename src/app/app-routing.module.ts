import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';
import { TasksComponent }       from './tasks/tasks.component';
import { TaskNewComponent }       from './task-new/task-new.component';
import { TaskEditComponent }       from './task-edit/task-edit.component';

import { SignInComponent,
         RegisterComponent,
         ChangePasswordComponent,
         SignOutComponent
       } from './auth';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks',      component: TasksComponent },
  { path: 'new-task',        component: TaskNewComponent },
  { path: 'edit-task/:id',       component: TaskEditComponent },
  { path: 'sign-in',         component: SignInComponent },
  { path: 'register',        component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'sign-out',        component: SignOutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
