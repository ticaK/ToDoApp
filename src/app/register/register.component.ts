import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public newUser = { name: '', email: '', password: '' };
  public errors = {};

  constructor(private registerService: RegisterService) {}

  public ngOnInit() {
    this.registerService.userFailedRegister$.subscribe(value => {
      this.errors = value;
    });
  }

  public register() {
    this.registerService.register(this.newUser);
  }
}