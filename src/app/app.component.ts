import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';
import { RouterService } from './shared/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ToDoApp';
  constructor(
    private loginService: LoginService,
    private routerService:RouterService
  ) {}

  public logout(){
    this.loginService.logout();
    this.routerService.goLogin();
  }

  public loggedIn(){
    return this.loginService.loggedIn();
  }
}