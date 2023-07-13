import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private baseUrl: string = 'https://localhost:3030/data/tasks';

  constructor(
    private http: HttpClient,
    private taskService: TaskServiceService
  ) {}

  storeTasks(tasks: Task[]) {
    this.http.put(this.baseUrl, tasks).subscribe((response) => {
      console.log(response);
    });
  }
}
