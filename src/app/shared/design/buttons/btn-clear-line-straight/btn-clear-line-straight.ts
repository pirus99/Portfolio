import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-clear-line-straight',
  imports: [],
  templateUrl: './btn-clear-line-straight.html',
  styleUrl: './btn-clear-line-straight.scss'
})
export class BtnClearLineStraight {
  @Input() text: string = '';
  @Input() link: string = '';
}
