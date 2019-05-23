import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  public todos: null;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService
      .getAll()
      .then((result: any) => (this.todos = result.data))
      .catch(error => {
        console.log(error);
      });
  }

  changeCompletedStatus(todo) {
    todo.completed = !todo.completed;
    this.todoService
      .editTodo(todo)
      .then((result: any) => {
        result.data.completed;
      })
      .catch(error => console.log(error));
  }

  completedItem(todo) {
    if (todo.completed) {
      return true;
    }
    return false;
  }
}