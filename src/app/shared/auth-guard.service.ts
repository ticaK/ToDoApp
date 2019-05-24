import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/services/login.service';
import { RouterService } from './router.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private routerService: RouterService) {}

  canActivate(): boolean {
    if (this.loginService.loggedIn()) {
      return true;
    }
    this.routerService.goLogin();
    return false;
  }
}
