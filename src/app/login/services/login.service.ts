import { Injectable } from '@angular/core';
import axios from 'axios';
import { RouterService } from 'src/app/shared/router.service';
import { Subject } from 'rxjs';
const BASE_URL = 'http://localhost:8000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userFailedLogin = new Subject();
  public userFailedLogin$ = this._userFailedLogin.asObservable();

  constructor(public routerService: RouterService) {}

  public login(user) {
    return axios
      .post(`${BASE_URL}/login`, user)
      .then((res: any) => {
        if (res.data.access_token) {
          localStorage.setItem('token', res.data.access_token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
          this.routerService.goTodos();
        }
      })
      .catch(err => {
        this._userFailedLogin.next(err.response.data.error);
      });
  }

  public logout() {
    localStorage.removeItem('token');
    this.routerService.goLogin();
  }

  public loggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
