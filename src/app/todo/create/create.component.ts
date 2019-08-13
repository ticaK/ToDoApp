import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { RouterService } from 'src/app/shared/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  private newTodo = {
    id: this.route.snapshot.paramMap.get('id'),
    description: '',
    priority: '',
    completed: null
  };
  private priorities = ['low', 'medium', 'high'];
  private errors = null;

  constructor(
    public todoService: TodoService,
    public routerService: RouterService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.newTodo.id) {
      this.editTodo(this.newTodo);
    }
    this.createTodo();
  }
  public createTodo() {
    this.todoService
      .createTodo(this.newTodo)
      .then((res: any) => this.routerService.goTodos())
      .catch(error => {
        this.errors = error.response.data.errors;
      });
  }

  editTodo(todo) {
    this.todoService
      .editTodo(todo)
    .then((res: any) => {this.routerService.goTodos()})
      .catch(error => {
        this.errors = error.response.data.errors;
      });
  }
}