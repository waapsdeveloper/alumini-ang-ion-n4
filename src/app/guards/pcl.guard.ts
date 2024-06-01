import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class PclGuard implements CanActivate {

  constructor(private authService: UsersService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isProfileComplete()) {
      return true;
    } else {
      this.router.navigate(['/pages/dl/edit-profile']);
      return false;
    }
  }
}
