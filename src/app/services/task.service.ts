import { Injectable } from '@angular/core';
import { Task }       from '../task';
import { TASKS }      from '../seeds/mock-tasks';
import { HttpModule } from '@angular/http';
import { Headers } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
  constructor(
    private tokenService: Angular2TokenService
  ) { }
  private tasksUrl        = 'api/tasks';  // URL to web api
  private changeStatusUrl = 'api/change_task_status';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'})

  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.tokenService.get(url)
               .toPromise()
               .then(response => response.json() as Task)
               .catch(this.handleError);
  }
  getTasks(): Promise<Task[]> {
    return this.tokenService.get(this.tasksUrl)
               .toPromise()
               .then(response => response.json() as Task[])
               .catch(this.handleError);
  }
  changeTaskStatus(id: number): Promise<Task[]> {
    const url = `${this.changeStatusUrl}/${id}`;
    return this.tokenService.get(url)
               .toPromise()
               .then(response => response.json() as Task[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    console.log(error)
    console.log()
    return Promise.reject(error.message || error);
  }
}
