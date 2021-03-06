import { Injectable } from '@angular/core';
import axios from 'axios';
import { RouterService } from 'src/app/shared/router.service';
const BASE_URL = 'http://localhost:8000/api/auth';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public routerService: RouterService) {}

  getAll(completed) {
    return axios.get(`${BASE_URL}/todos?completed=${completed}`);
  }

  getTodo(id) {
    return axios.get(`${BASE_URL}/todos/${id}`);
  }

  deleteTodo(id) {
    return axios.delete(`${BASE_URL}/todos/${id}`);
  }

  createTodo(todo) {
    return axios.post(`${BASE_URL}/todos`, todo);
  }

  editTodo(todo) {
    return axios.put(`${BASE_URL}/todos/${todo.id}`, todo);
  }
