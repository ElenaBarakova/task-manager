export const STATUSES = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
};

export class Task {
  public title: string;
  public status: string;

  constructor(title: string, status: string) {
    this.title = title;
    this.status = status;
  }
}
