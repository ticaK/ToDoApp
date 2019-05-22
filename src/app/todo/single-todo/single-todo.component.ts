import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.sass']
})
export class SingleTodoComponent implements OnInit {
  public todo = {};

  constructor(public todoService: TodoService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id) {
    this.todoService
      .getTodo(id)
      .then((result: any) => (this.todo = result.data))
      .catch(error => {
        console.log(error);
      });
  }
}