import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { createRoutes } from './create.routing';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(createRoutes), SharedModule],
})
export class CreateModule { }
