import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { registerRoutes } from './register.routing';

@NgModule({
  imports: [RouterModule.forChild(registerRoutes), SharedModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule {}
