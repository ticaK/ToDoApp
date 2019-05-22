import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ToDoApp';
  constructor(
    private loginService: LoginService
  ) {}

  public logout(){
    this.loginService.logout();
  }

  public loggedIn(){
    return this.loginService.loggedIn();
  }
}