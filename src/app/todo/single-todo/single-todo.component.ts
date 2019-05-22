import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/shared/router.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.sass']
})
export class SingleTodoComponent implements OnInit {
  public todo = {};
  public currentUserId = this.route.snapshot.paramMap.get('id');

  constructor(public todoService: TodoService, public route: ActivatedRoute, public routerService: RouterService) {}

  ngOnInit() {
    this.getTodo(this.currentUserId);
  }

  getTodo(id) {
    this.todoService
      .getTodo(id)
      .then((result: any) => (this.todo = result.data))
      .catch(error => {
        console.log(error);
      });
  }
  deleteTodo() {
    this.todoService
      .deleteTodo(this.currentUserId)
      .then((result: any) => this.routerService.goTodos())
      .catch(error => {
        console.log(error);
      });
  }
}