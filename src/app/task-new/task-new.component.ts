import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TaskService } from '../services/task.service'

import { Task } from '../task';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-detail',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})


export class TaskEditComponent implements OnInit {
  task: Task;
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taskService.getTask(+params['id']))
      .subscribe(task => this.task = task);
  }
  goBack(): void {
    this.location.back();
  }
}