import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [RouterModule.forChild(homeRoutes), CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
