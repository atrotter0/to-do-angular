import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ]

  priorityColor(currentTask) {
    if (parseInt(currentTask.priority) === 3) {
      return "bg-danger";
    } else if (parseInt(currentTask.priority) === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
