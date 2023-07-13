import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyListTitleComponent } from './empty-list-title.component';

describe('EmptyListTitleComponent', () => {
  let component: EmptyListTitleComponent;
  let fixture: ComponentFixture<EmptyListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyListTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
