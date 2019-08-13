import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todo.routing';
import { TodoComponent } from './todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoIndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent, SingleTodoComponent, TodoIndexComponent],
  imports: [CommonModule, RouterModule.forChild(todoRoutes), SharedModule],
  exports: [TodoComponent, SingleTodoComponent]
})
export class TodoModule {}
