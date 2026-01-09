import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
@Component({
  selector: 'app-btn-clear-circle',
  imports: [CommonModule, NgxPageScrollModule],
  templateUrl: './btn-clear-circle.html',
  styleUrl: './btn-clear-circle.scss'
})
export class BtnClearCircle {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() dark: boolean = false;
  @Input() scrollSpeed: number = 500;
  @Input() scrollOffset: number = 0;
  @Input() modifyScroll: boolean = false;

}
