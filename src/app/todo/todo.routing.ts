import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoIndexComponent } from './index.component';

export const todoRoutes: Routes = [
  {
    path: '',
    component: TodoIndexComponent,
    children: [
      {
        path: '',
        component: TodoComponent
      },
      {
        path: ':id',
        component: SingleTodoComponent
      }
    ]
  }
];
