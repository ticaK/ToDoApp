import { Routes } from '@angular/router';
import { CreateComponent } from './create.component';
import { AuthGuard } from 'src/app/shared/auth-guard.service';

export const createRoutes: Routes=[
  {
    path:"",
    component:CreateComponent,
    canActivate:[AuthGuard]
  }
]