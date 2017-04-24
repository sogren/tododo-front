import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './services/task.service'
import { Angular2TokenService }    from 'angular2-token';

@Component({
  selector: 'app-root',
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'what the fuck!';

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init();
  }
}
