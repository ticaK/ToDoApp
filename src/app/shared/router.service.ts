import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  goHome(){
    this.router.navigate(['/home']);
  }
  goRegister(){
    this.router.navigate(['/register']);
  }
  constructor(private router: Router) { }
}
