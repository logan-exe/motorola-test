import { Component, OnInit } from '@angular/core';
import { Input, Ripple, initTE } from 'tw-elements';
import { Router } from '@angular/router';

// Initialize Tailwind Elements with necessary components. ref: tw docs
initTE({ Input, Ripple });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Pre defined username and password for the login form.
  username: string = 'sample';
  password: string = 'sample123';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Function to handle login logic.
  login() {
    if (this.username && this.password) {
      // Store a dummy user token in local storage and navigate to the home page.
      localStorage.setItem('userToken', 'your-token-value');
      this.router.navigate(['/home']);
    } else {
      // Alert the user if the username or password is missing.
      alert('Username and password are required');
    }
  }
}
