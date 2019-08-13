import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from '../todo/create/create.component';

const modules = [CommonModule, FormsModule];

@NgModule({
  declarations:[CreateComponent],
  imports: [modules],
  exports: [modules, CreateComponent]
})
export class SharedModule {}