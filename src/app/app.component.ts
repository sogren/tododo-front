import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service'

@Component({
  selector: 'app-root',
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'what the fuck!';
}
