import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/task.model';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  tasksSorted: any = {
    pending: [],
    progress: [],
    completed: [],
  };
  numberOfTasks: number = 0;
  subscription: Subscription = new Subscription();

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

  onClearAll() {
    this.taskService.clearTasks();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
