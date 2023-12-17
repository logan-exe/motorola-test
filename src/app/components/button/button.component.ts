import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  constructor() {
    this.text = 'button';
  }
  ngOnInit(): void {}

  onClick() {
    console.log('hello world');
  }
}
