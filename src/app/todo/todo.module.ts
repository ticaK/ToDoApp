import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todo.routing';
import { TodoComponent } from './todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoIndexComponent } from './index.component';

@NgModule({
  declarations: [TodoComponent,SingleTodoComponent, TodoIndexComponent],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  exports: [TodoComponent,SingleTodoComponent]
})
export class TodoModule {}