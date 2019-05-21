import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public goHome() {
    this.router.navigate(['/home']);
  }
  public goRegister() {
    this.router.navigate(['/register']);
  }
  public goLogin() {
    this.router.navigate(['/login']);
  }
  constructor(private router: Router) {}
}
