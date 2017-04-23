import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './services/task.service'

@Component({
  selector: 'app-root',
  providers: [TaskService],
  templateUrl: './views/app.component.html',
  styleUrls: ['./styles/app.component.css']
})

export class AppComponent {
  title = 'what the fuck!';
}
