import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { STATUSES, Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  private tasksSorted: any = {
    pending: [],
    'in-progress': [],
    completed: [],
  };

  tasksChanged: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.tasksSorted
  );

  addTask(task: Task) {
    this.tasksSorted.pending.push(task);
    this.tasksChanged.next({ ...this.tasksSorted });
  }
  getTasks() {
    return { ...this.tasksSorted };
  }
  getNumberOfTasks() {
    const numberOfTasks: number = [
      ...this.tasksSorted.pending,
      ...this.tasksSorted.completed,
      ...this.tasksSorted['in-progress'],
    ]?.length;
    return numberOfTasks;
  }
  getMergedTasks() {
    const mergedTasks: Task[] = [
      ...this.tasksSorted.pending,
      ...this.tasksSorted.completed,
      ...this.tasksSorted['in-progress'],
    ];
    return mergedTasks;
  }

  clearTasks() {
    this.tasksSorted = { pending: [], 'in-progress': [], completed: [] };

    this.tasksChanged.next({ ...this.tasksSorted });
  }
  deleteTask(task: Task) {
    const updatedArray = this.tasksSorted[task.status].filter(
      (item: Task) => item.title !== task.title
    );
    this.tasksSorted = {
      ...this.tasksSorted,
      [task.status]: updatedArray,
    };

    this.tasksChanged.next({ ...this.tasksSorted });
  }

  setTaskStatus(task: Task, changedStatus: string) {
    const updatedOldStatusArray = this.tasksSorted[task.status].filter(
      (item: Task) => item.title !== task.title
    );
    const taskWithUpdatedStatus = { ...task, status: changedStatus };
    const updatedNewStatusArray = [
      ...this.tasksSorted[changedStatus],
      taskWithUpdatedStatus,
    ];

    this.tasksSorted = {
      ...this.tasksSorted,
      // The array with the old status where the item should be deleted
      [task.status]: updatedOldStatusArray,
      // The array with the updated status where the item is added
      [changedStatus]: updatedNewStatusArray,
    };

    this.tasksChanged.next({ ...this.tasksSorted });
  }
}
