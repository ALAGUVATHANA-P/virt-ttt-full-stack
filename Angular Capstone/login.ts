import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
  if (!this.email || !this.password) {
    this.errorMessage = 'Email and Password are required';
    return;
  }

  this.auth.login(this.email, this.password).subscribe({
    next: (res: any[]) => {
  if (res.length > 0) {
    const user = res[0];
    this.auth.setToken(user.token);
    localStorage.setItem('user', JSON.stringify(user)); // ✅ store full user
    localStorage.setItem('userId', user.id);
    this.router.navigate(['/maintenance']);
  } else {
    this.errorMessage = 'Invalid email or password';
  }
},
    error: (err) => {
      console.error('Login failed', err);
      this.errorMessage = 'Server error. Please try again.';
    }
  });
}
}