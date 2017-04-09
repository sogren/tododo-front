import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './seeds/mock-tasks';
import { HttpModule }    from '@angular/http';

@Injectable()

export class TaskService {
  constructor(private http: Http) { }
  private tasksUrl = 'api/tasks';  // URL to web api

  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
  getTask(id: number): Promise<Task> {
    return this.getTasks()
               .then(tasks => tasks.find(task => task.id === id));
  }
  getHeroes(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
               .toPromise()
               .then(response => response.json().data as Task[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
