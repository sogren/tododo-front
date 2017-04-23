import { Injectable } from '@angular/core';
import { Task }       from '../task';
import { TASKS }      from '../seeds/mock-tasks';
import { HttpModule } from '@angular/http';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
  constructor(private http: Http) { }
  private tasksUrl = 'http://localhost:3000/api/tasks';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'})


  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Task)
               .catch(this.handleError);
  }
  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
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
