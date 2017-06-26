import { RouterModule, Routes } from '@angular/router';

import { TaskDetailComponent }  from './task-detail/task-detail.component';
import { TasksComponent }       from './tasks.component';
import { TaskNewComponent }     from './task-new/task-new.component';
import { TaskEditComponent }    from './task-edit/task-edit.component';

const tasks_routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'tasks/details/:id', component: TaskDetailComponent },
  { path: 'tasks/index',       component: TasksComponent },
  { path: 'tasks/new',         component: TaskNewComponent },
  { path: 'tasks/edit/:id',    component: TaskEditComponent }
];

export const TasksRouting = RouterModule.forChild(tasks_routes);
