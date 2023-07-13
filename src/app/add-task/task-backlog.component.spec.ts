import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBacklogComponent } from './task-backlog.component';

describe('AddTaskComponent', () => {
  let component: TaskBacklogComponent;
  let fixture: ComponentFixture<TaskBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskBacklogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
