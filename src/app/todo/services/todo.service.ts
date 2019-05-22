import { Injectable } from '@angular/core';
import axios from 'axios';
import { RouterService } from 'src/app/shared/router.service';
const BASE_URL = 'http://localhost:8000/api/auth';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public routerService: RouterService) {}

  getAll() {
    return axios.get(`${BASE_URL}/todos`);
  }

  getTodo(id) {
    return axios.get(`${BASE_URL}/todos/${id}`);
  }
  deleteTodo(id) {
    return axios.delete(`${BASE_URL}/todos/${id}`);
  }
}
