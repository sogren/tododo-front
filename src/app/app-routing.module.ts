import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { AuthComponent }        from './auth.component';
import { TaskDetailComponent }  from './task/task-detail.component';
import { TasksComponent }       from './tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'sign_up',    component: AuthComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks',      component: TasksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
