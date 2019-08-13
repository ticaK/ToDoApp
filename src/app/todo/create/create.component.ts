import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { RouterService } from 'src/app/shared/router.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  private newTodo = {};
  private priorities = ['low', 'medium', 'high'];
  private errors = null;

  constructor(
    public todoService: TodoService,
    public routerService: RouterService
  ) {}

  ngOnInit() {}

  public createTodo() {
    this.todoService
      .createTodo(this.newTodo)
      .then((res: any) => this.routerService.goTodos())
      .catch(error => {
        this.errors = error.response.data.errors;
      });
  }
}