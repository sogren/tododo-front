import { Component, Input }        from '@angular/core';
import { TaskService } from '../services/task.service'
import { Task } from '../task';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  private toasterService: ToasterService;
  @Input()
  task: Task;

  constructor(
    private taskService: TaskService,
    toasterService: ToasterService
  ) {}

  changeTaskStatus(id): void {
    this.taskService.changeTaskStatus(id).then()
  }

  deleteTask(id): void {
    this.taskService.deleteTask(id).then(
      res => {
        if(res._body){
          this.task = null;
        }
      }
    )
  }
}
