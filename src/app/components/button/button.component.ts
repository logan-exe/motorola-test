import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text: string = 'button'; // Set default value here
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && !changes['text'].currentValue) {
      this.text = 'button'; // Set default value if no input provided
    }
  }

  onClick() {
    this.btnClick.emit();
  }
}
