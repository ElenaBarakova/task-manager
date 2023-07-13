import { Pipe, PipeTransform } from '@angular/core';
import { STATUSES, Task } from '../../task.model';

@Pipe({
  name: 'filterCompleted',
})
export class FilterCompletedPipe implements PipeTransform {
  transform(values: Task[]) {
    return values.filter((value) => value.status === STATUSES.COMPLETED);
  }
}
