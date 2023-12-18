import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if the user's token is stored in local storage
    return !!localStorage.getItem('userToken');
  }
}
