import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent, FormsModule],
  template: `
    <h1 style="text-align:center;">My Task App</h1>
    <app-task></app-task>
  `
})
export class AppComponent {}