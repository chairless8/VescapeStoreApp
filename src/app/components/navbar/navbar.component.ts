// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    const email = prompt('Enter your email');
    const password = prompt('Enter your password');
    if (email && password) {
      this.authService.login(email, password).then(() => {
        this.router.navigate(['/profile']);
      });
    } else {
      alert('Email and password are required.');
    }
  }

  register() {
    const email = prompt('Enter your email');
    const password = prompt('Enter your password');
    if (email && password) {
      this.authService.register(email, password).then(() => {
        this.router.navigate(['/profile']);
      });
    } else {
      alert('Email and password are required.');
    }
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
