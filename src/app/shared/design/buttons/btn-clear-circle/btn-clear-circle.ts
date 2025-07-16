import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-clear-circle',
  imports: [],
  templateUrl: './btn-clear-circle.html',
  styleUrl: './btn-clear-circle.scss'
})
export class BtnClearCircle {
  @Input() text: string = '';
  @Input() link: string = '';

}
