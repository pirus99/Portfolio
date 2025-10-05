import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-clear-circle',
  imports: [CommonModule],
  templateUrl: './btn-clear-circle.html',
  styleUrl: './btn-clear-circle.scss'
})
export class BtnClearCircle {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() dark: boolean = false;

}
