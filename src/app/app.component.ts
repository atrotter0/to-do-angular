import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'to-do-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;
  showNewTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  showTaskForm(shouldShowTask: boolean) {
    console.log("made it to newTask");
    this.showNewTask = shouldShowTask;
  }

  addTask(newTask: Task) {
    this.showNewTask = null;
    this.masterTaskList.push(newTask);
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }
}
