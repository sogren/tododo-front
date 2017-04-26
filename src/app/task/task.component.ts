import { Component, Input }        from '@angular/core';
import { TaskService } from '../services/task.service'
import { Task } from '../task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input()
  task: Task;

  constructor(
    private taskService: TaskService
  ) {}

  changeTaskStatus(id): void {
    this.taskService.changeTaskStatus(id).then()
        // res => console.log(res), //{
        // //     this.updatePasswordData    = <UpdatePasswordData>{};
        // //     this.output                = res;
        // // },
        // error => {
        //     // this.updatePasswordData    = <UpdatePasswordData>{};
        //     // this.output                = error;
        // });
  }
}
