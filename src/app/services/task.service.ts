import { Injectable } from '@angular/core';
import { Task }       from '../task';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
  constructor(
    private tokenService: Angular2TokenService
  ) { }

  getTask(id: number): Promise<Task> {
    const url = `api/tasks/${id}`;
    return this.tokenService.get(url)
               .toPromise()
               .then(response => response.json() as Task)
               .catch(this.handleError);
  }

  getTasks(): Promise<Task[]> {
    const url = `api/tasks`;
    return this.tokenService.get(url)
               .toPromise()
               .then(response => response.json() as Task[])
               .catch(this.handleError);
  }

  changeTaskStatus(id: number): Promise<any> {
    const url = `api/change_task_status/${id}`;
    return this.tokenService.get(url)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  newTask(task): Promise<Task> {
    const url = `api/tasks/`;
    return this.tokenService.post(url, task)
               .toPromise()
               .then(response => response.json() as Task)
               .catch(this.handleError);
  }

  editTask(id: number, task): Promise<any> {
    const url = `api/tasks/${id}`;
    return this.tokenService.put(url, task)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  deleteTask(id: number): Promise<any> {
    const url = `api/tasks/${id}`;
    return this.tokenService.delete(url)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    console.log(error)
    console.log()
    return Promise.reject(error.message || error);
  }
}
