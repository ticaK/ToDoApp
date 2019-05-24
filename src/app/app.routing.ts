import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'todos',
    loadChildren: './todo/todo.module#TodoModule'
  },
  {
    path: 'create',
    loadChildren: './todo/create/create.module#CreateModule'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
