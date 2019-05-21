import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
const BASE_URL = 'http://localhost:8000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}
  register(user:User) {
    return this.httpClient.post(`${BASE_URL}/register`, user);
  }
}