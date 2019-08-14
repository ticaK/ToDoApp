import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  public todos = [];
  public isCompleted = '';
  public p = 1;
  public n = 3;
  public isAll = true;

  constructor(public todoService: TodoService) {}

  public ngOnInit() {
    this.getTodos(this.isCompleted);
  }

  public getTodos(completed) {
    this.p = 1;
    this.todoService
      .getAll(completed)
      .then((result: any) => {
        this.todos = result.data;
        this.isAll = !!completed === false;
      })
      .catch(error => {
        console.log(error);
      });
  }

  public completeItem(todo) {
    todo.completed = !todo.completed;
    this.todoService
      .editTodo(todo)
      .then((result: any) => {
        if (this.isAll) {
          return;
        }
        this.todos = this.todos.filter(todo => todo.id !== result.data.id);
      })
      .catch(error => console.log(error));
  }

  public allowPagination() {
    return this.todos && this.n < this.todos.length;
  }
}
