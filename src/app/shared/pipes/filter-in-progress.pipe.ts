import { Pipe, PipeTransform } from '@angular/core';
import { STATUSES, Task } from '../../task.model';

@Pipe({
  name: 'filterInProgress',
})
export class FilterInProgressPipe implements PipeTransform {
  transform(values: Task[]) {
    return values.filter((value) => value.status === STATUSES.IN_PROGRESS);
  }
}
