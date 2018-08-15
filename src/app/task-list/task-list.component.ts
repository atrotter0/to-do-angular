import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() editClickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteTasks";

  editButtonClicked(taskToEdit: Task) {
    this.editClickSender.emit(taskToEdit);
  }

  priorityColor(currentTask) {
    if (parseInt(currentTask.priority) === 3) {
      return "bg-danger";
    } else if (parseInt(currentTask.priority) === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }
}
