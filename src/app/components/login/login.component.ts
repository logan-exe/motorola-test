import { Component, OnInit } from '@angular/core';
import { Input, Ripple, initTE } from 'tw-elements';
import { Router } from '@angular/router';

initTE({ Input, Ripple });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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

  login() {
    console.log('wer11');
    if (this.username && this.password) {
      localStorage.setItem('userToken', 'your-token-value'); // Replace with actual token
      this.router.navigate(['/home']);
    } else {
      console.log('wer');
      alert('Username and password are required');
    }
  }
}
