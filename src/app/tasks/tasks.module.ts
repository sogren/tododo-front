import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import {
  TaskDetailComponent,
  TasksComponent,
  TaskComponent,
  TaskNewComponent,
  TaskEditComponent
} from './';

import { Angular2TokenService }          from 'angular2-token';
import { TaskService }                   from '../services/task.service'
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { TasksRouting }                  from './tasks-routing.module';

@NgModule({
  declarations: [
    TaskDetailComponent,
    TasksComponent,
    TaskComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ToasterModule,
    TasksRouting
  ],
  providers: [
    Angular2TokenService,
    TaskService
  ]
})

export class TasksModule { }
