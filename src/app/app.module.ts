import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }            from './app.component';
import { TaskDetailComponent }     from './task/task-detail.component';
import { TasksComponent }          from './tasks.component';
import { DashboardComponent }      from './dashboard.component';
import { AuthComponent }           from './auth.component';

import { AppRoutingModule }        from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TaskDetailComponent,
    TasksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
