import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-clear-line-wave',
  imports: [],
  templateUrl: './btn-clear-line-wave.html',
  styleUrl: './btn-clear-line-wave.scss'
})
export class BtnClearLineWave {
  @Input() text: string = '';
  @Input() link: string = '';
}
