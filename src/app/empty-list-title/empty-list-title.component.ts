import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-empty-list-title',
  templateUrl: './empty-list-title.component.html',
  styleUrls: ['./empty-list-title.component.css'],
})
export class EmptyListTitleComponent {
  subscription: Subscription = new Subscription();
  tasksSorted: any = {
    pending: [],
    'in-progress': [],
    completed: [],
  };
  numberOfTasks: number = 0;
  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.tasksChanged.subscribe(
      (tasksSorted) => {
        this.tasksSorted = tasksSorted;
        this.numberOfTasks = this.taskService.getNumberOfTasks();
      }
    );
    this.tasksSorted = this.taskService.getTasks();
  }
}
