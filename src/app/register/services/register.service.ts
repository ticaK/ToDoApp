import { Injectable } from '@angular/core';
import axios from 'axios';
import { RouterService } from 'src/app/shared/router.service';
import { Subject } from 'rxjs';
const BASE_URL = 'http://localhost:8000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _userFailedRegister = new Subject();
  public userFailedRegister$ = this._userFailedRegister.asObservable();
  constructor(private routerService: RouterService) {}

  register(user) {
    return axios
      .post(`${BASE_URL}/register`, user)
      .then((res: any) => this.routerService.goLogin())
      .catch(error => {
        this._userFailedRegister.next(error.response.data.errors);
      });
  }
}