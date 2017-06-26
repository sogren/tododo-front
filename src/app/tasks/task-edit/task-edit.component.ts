import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { TaskService } from '../../services/task.service'

import { Task } from '../task';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html'
})


export class TaskEditComponent implements OnInit {
  task: Task = new Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taskService.getTask(+params['id']))
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  editTask(task): void {
    console.log(task.id)
    this.taskService.editTask(task.id, task).then(
      res => {
        if(res){
          this.router.navigate([`/detail/${task.id}`]);
        }
      }
    );
  }

}
