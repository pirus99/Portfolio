import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-clear-line-z',
  imports: [],
  templateUrl: './btn-clear-line-z.html',
  styleUrl: './btn-clear-line-z.scss'
})
export class BtnClearLineZ {
  @Input() text: string = '';
  @Input() link: string = '';
}
