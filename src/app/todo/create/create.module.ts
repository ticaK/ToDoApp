import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { createRoutes } from './create.routing';

@NgModule({
  declarations: [CreateComponent],
  imports: [RouterModule.forChild(createRoutes), SharedModule],
  exports:[CreateComponent]
})
export class CreateModule { }
