import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TaskService } from '../services/task.service'

import { Task } from '../task';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-detail',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})


export class TaskNewComponent implements OnInit {
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
  onSubmit() {

      this.output = null;

      this._tokenService.signIn(this.signInData).subscribe(
          res => {
              this.signInData     = <SignInData>{};
              this.output         = res;
              this.router.navigate(['/dashboard']);
          }, error => {
              this.signInData     = <SignInData>{};
              this.output         = error;
          }
      );
  }
  createTask(id, task): void {
    this.taskService.changeTaskStatus(id)
  }
}
