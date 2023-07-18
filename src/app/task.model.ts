export const STATUSES = {
  PENDING: 'pending',
  PROGRESS: 'inProgress',
  COMPLETED: 'completed',
};

export class Task {
  public title: string;
  public status: string;
  public description: string;

  constructor(title: string, status: string, description: string) {
    this.title = title;
    this.status = status;
    this.description = description;
  }
}
