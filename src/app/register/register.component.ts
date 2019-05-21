import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';
import { first } from 'rxjs/operators';
import { RouterService } from '../shared/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  newUser = { name: '', email: '', password: '' };
  constructor(private registerService: RegisterService, private routerService:RouterService ) {}

  onSubmit() {
    this.registerService
      .register(this.newUser)
      .pipe(first())
      .subscribe(
        data => {
          this.routerService.goHome();
        },
        error => {
          this.routerService.goRegister();
        }
      );
  }

  ngOnInit() {}
}