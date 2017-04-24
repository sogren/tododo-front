import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }            from './app.component';
import { TaskDetailComponent }     from './task-detail/task-detail.component';
import { TasksComponent }          from './tasks/tasks.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { Angular2TokenService }    from 'angular2-token';

import { AppRoutingModule }        from './app-routing.module';

import {
    AuthTokenModule
} from './auth';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TasksComponent,
    DashboardComponent
  ],
  imports: [
    AuthTokenModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [ Angular2TokenService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
