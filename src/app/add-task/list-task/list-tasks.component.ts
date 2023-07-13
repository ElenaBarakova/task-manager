import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/task.model';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit, OnDestroy {
  tasksSorted: any = {
    pending: [],
    'in-progress': [],
    completed: [],
  };
  mergedTasks: Task[] = [];
  numberOfTasks: number = 0;
  subscriptionSorted: Subscription = new Subscription();

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.subscriptionSorted = this.taskService.tasksChanged.subscribe(
      (tasksSorted) => {
        this.tasksSorted = tasksSorted;
        this.numberOfTasks = this.taskService.getNumberOfTasks();
        this.mergedTasks = this.taskService.getMergedTasks();
      }
    );

    this.tasksSorted = this.taskService.getTasks();
  }
  onDelete(task: Task) {
    this.taskService.deleteTask(task);
  }
  ngOnDestroy(): void {
    this.subscriptionSorted.unsubscribe();
  }
}
