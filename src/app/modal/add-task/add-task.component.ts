import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TaskServiceService } from '../../task-service.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @ViewChild('newTask') taskInput: any;
  taskName: any;
  buttonDisabled: boolean = false;
  subscription: Subscription = new Subscription();
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
    this.tasks = this.taskService.getTasks();
  }

  onTaskNameChange(event: any) {
    this.taskName = event.target.value;
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task);
    console.log(task);
    this.taskInput.nativeElement.value = '';
    const tasks: Task[] = this.taskService.getTasks();
    console.log(tasks);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
