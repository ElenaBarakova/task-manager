import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task.model';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  tasksSorted: any = {
    pending: [],
    progress: [],
    completed: [],
  };
  numberOfTasks: number = 0;

  subscriptionSorted: Subscription = new Subscription();
  public ulClass: string = 'taskList';
  public ulContainer: string = 'ulContainer';

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.subscriptionSorted = this.taskService.tasksChanged.subscribe(
      (tasksSorted) => {
        console.log('tasksSorted', tasksSorted);
        this.tasksSorted = tasksSorted;
        this.numberOfTasks = this.taskService.getNumberOfTasks();
      }
    );
    this.tasksSorted = this.taskService.getTasks();

    console.log(this.tasksSorted);
    this.onChangeView();
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onStatusChange(task: Task, status: string) {
    this.taskService.setTaskStatus(task, status);
  }

  onChangeView() {
    if (this.ulClass === 'taskList') {
      this.ulClass = 'taskList-column';
      this.ulContainer = 'ul-container-column';
    } else {
      this.ulClass = 'taskList';
      this.ulContainer = 'ul-container';
    }
  }

  ngOnDestroy(): void {
    this.subscriptionSorted.unsubscribe();
  }
}
