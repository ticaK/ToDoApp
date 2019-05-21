import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import axios from 'axios';
import { RouterService } from 'src/app/shared/router.service';
import { Subject } from 'rxjs';
const BASE_URL = 'http://localhost:8000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userFailedAuth = new Subject();
  public userFailedAuth$ = this._userFailedAuth.asObservable();

  constructor(public routerService: RouterService) {}

  public login(user) {
    console.log('test');
    return axios
      .post(`${BASE_URL}/login`, user)
      .then((res: any) => {
        console.log(res);
        if (res.data.access_token) {
          localStorage.setItem('token', res.data.access_token);
          this.routerService.goHome();
        }
      })
      .catch(err => {
        this._userFailedAuth.next(err.response.data.error);
      });
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public loggedIn() {
    return localStorage.getItem('token') !== null;
  }
}