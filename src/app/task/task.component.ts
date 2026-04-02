import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  newTask: string = '';

  ngOnInit() {
    const data = localStorage.getItem('tasks');
    if (data) this.tasks = JSON.parse(data);
  }

  addTask() {
    console.log("Adding:", this.newTask);
    if (!this.newTask.trim()) return;

    this.tasks.push({
      id: Date.now(),
      title: this.newTask,
      completed: false
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.newTask = '';
  }
  deleteTask(id: number) {
  this.tasks = this.tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}
  toggleTask(task: any) {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

editTask(task: any) {
  const updated = prompt('Edit task:', task.title);
  if (updated !== null) {
    task.title = updated;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
  trackById(index: number, task: Task) {
  return task.id;
}
}