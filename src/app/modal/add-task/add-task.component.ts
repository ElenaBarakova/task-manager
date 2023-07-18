import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TaskServiceService } from '../../task-service.service';
import { Subscription } from 'rxjs';
import { STATUSES, Task } from 'src/app/task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @ViewChild('newTask') taskInput: any;
  @ViewChild('newTaskDescription') taskDescriptionInput: any;

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

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const title: string = form.value.newTask;
    const description: string = form.value.newTaskDescription;
    const task: Task = {
      title: title,
      status: STATUSES.PENDING,
      description: description,
    };

    this.taskService.addTask(task);
    console.log(task);

    form.resetForm();

    const tasks: Task[] = this.taskService.getTasks();
    console.log(tasks);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
