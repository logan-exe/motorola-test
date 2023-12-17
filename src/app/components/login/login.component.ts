import { Component, OnInit } from '@angular/core';
import { Input, Ripple, initTE } from 'tw-elements';

initTE({ Input, Ripple });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initTE({ Input, Ripple });
  }
}
