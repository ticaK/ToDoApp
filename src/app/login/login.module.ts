import { NgModule } from '@angular/core';
import { loginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
   RouterModule.forChild(loginRoutes),
   SharedModule
  ],
  declarations:[LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }