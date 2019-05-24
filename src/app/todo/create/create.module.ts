import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { createRoutes } from './create.routing';
import { AuthGuard } from 'src/app/shared/auth-guard.service';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(createRoutes), SharedModule],
  providers: [AuthGuard]
})
export class CreateModule { }
