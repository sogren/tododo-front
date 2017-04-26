import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }            from './app.component';
import { TaskDetailComponent }     from './task-detail/task-detail.component';
import { TasksComponent }          from './tasks/tasks.component';
import { TaskComponent }           from './task/task.component';
import { TaskNewComponent }        from './task-new/task-new.component';
import { TaskEditComponent }       from './task-edit/task-edit.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { Angular2TokenService }    from 'angular2-token';
import { TaskService } from './services/task.service'

import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppRoutingModule }        from './app-routing.module';

import {
    AuthTokenModule
} from './auth';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TasksComponent,
    TaskComponent,
    DashboardComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  imports: [
    AuthTokenModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToasterModule,
    AppRoutingModule
  ],

  providers: [
    Angular2TokenService,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
