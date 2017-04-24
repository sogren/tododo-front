import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'my-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  constructor(
    private router: Router,
    private taskService: TaskService) { }
  tasks: Task[];
  selectedTask: Task;
  task: Task = {
    id: 1,
    title: 'aerga',
    content: 'Windstorm'
  };

  onSelect(task: Task): void {
    if(this.selectedTask == task){
      this.selectedTask = null;
    }else{
      this.selectedTask = task;
    }
  };
  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  ngOnInit(): void {
    this.getTasks();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTask.id]);
  }
}
