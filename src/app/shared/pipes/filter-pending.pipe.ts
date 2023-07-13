import { Pipe, PipeTransform } from '@angular/core';
import { STATUSES, Task } from '../../task.model';

@Pipe({
  name: 'filterPending',
})
export class FilterPendingPipe implements PipeTransform {
  transform(values: Task[]) {
    return values.filter((value) => value.status === STATUSES.PENDING);
  }
}
