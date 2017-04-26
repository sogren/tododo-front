import { Component }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { TaskService } from '../services/task.service'

import { Task } from '../task';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})


export class TaskNewComponent {
  task: Task = new Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  goBack(): void {
    this.location.back();
  }

  newTask(task): void {
    console.log('ociechuj')
    console.log(task)
    this.taskService.newTask(task);
    // this.router.navigate(['/dashboard']);
  }

}
