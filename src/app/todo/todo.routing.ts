import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoIndexComponent } from './index.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from 'src/app/shared/auth-guard.service';

export const todoRoutes: Routes = [
  {
    path: '',
    component: TodoIndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TodoComponent
      },
      {
        path: ':id',
        component: SingleTodoComponent
      },
      {
        path: ':id/edit',
        component: CreateComponent
      }
    ]
  }
];
