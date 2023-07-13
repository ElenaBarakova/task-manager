import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './add-task/list-task/list-tasks.component';
import { FooterComponent } from './add-task/footer/footer.component';
import { TaskBacklogComponent } from './add-task/task-backlog.component';
import { FilterPendingPipe } from './shared/pipes/filter-pending.pipe';
import { FilterCompletedPipe } from './shared/pipes/filter-completed.pipe';
import { FilterInProgressPipe } from './shared/pipes/filter-in-progress.pipe';
import { AddTaskComponent } from './modal/add-task/add-task.component';
import { ModalComponent } from './modal/modal.component';
import { EmptyListTitleComponent } from './empty-list-title/empty-list-title.component';
import { CdkDrag, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { NgFor } from '@angular/common';
const appRoutes: Routes = [
  { path: '', component: TaskBacklogComponent },
  { path: 'manage-tasks', component: TaskManagerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskBacklogComponent,
    ListTasksComponent,
    FooterComponent,
    TaskBacklogComponent,
    TaskManagerComponent,
    FilterPendingPipe,
    FilterCompletedPipe,
    FilterInProgressPipe,
    AddTaskComponent,
    ModalComponent,
    EmptyListTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DragDropModule,
    CdkDropList,
    NgFor,
    CdkDrag,
    // MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
