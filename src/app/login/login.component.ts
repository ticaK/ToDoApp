import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { RouterService } from '../shared/router.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public logUser = { email: '', password: '' };
  public errors = null;

  constructor(private loginService: LoginService) {}

  public ngOnInit() {
    this.loginService.userFailedAuth$.subscribe(value => {
      console.log(value);
      this.errors = value;
    });
  }

  public login() {
    this.loginService.login(this.logUser);
  }
}