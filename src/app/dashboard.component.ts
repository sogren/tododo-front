import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './services/task.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './views/dashboard.component.html',
  styleUrls: ['./styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks);
  }
}
