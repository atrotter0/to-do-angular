import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
  @Input() showNewTask: boolean;
  @Output() sendTask = new EventEmitter();

  submitForm(description: string, priority: string) {
   let newTask: Task = new Task(description, parseInt(priority)); 
   this.sendTask.emit(newTask);
  }
}
