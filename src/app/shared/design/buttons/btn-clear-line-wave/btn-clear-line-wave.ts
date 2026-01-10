import { Component, Input } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-btn-clear-line-wave',
  imports: [NgxPageScrollModule],
  templateUrl: './btn-clear-line-wave.html',
  styleUrl: './btn-clear-line-wave.scss'
})
export class BtnClearLineWave {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() scrollSpeed: number = 500;
  @Input() scrollOffset: number = 0;
  @Input() modifyScroll: boolean = false;
}
