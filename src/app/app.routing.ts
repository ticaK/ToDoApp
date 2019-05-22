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
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
    
  },
  {
    path:'todos',
    loadChildren:'./todo/todo.module#TodoModule',
  },
  
  {
    path: '**',
    redirectTo: 'home'
  }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);