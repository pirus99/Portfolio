import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-btn-clear-image-roll',
  imports: [NgStyle, NgxPageScrollModule],
  templateUrl: './btn-clear-image-roll.html',
  styleUrl: './btn-clear-image-roll.scss'
})
export class BtnClearImageRoll {
  @ViewChild('aRef') aRef!: ElementRef;

  @Input() text: string = '';
  @Input() link: string = '';
  @Input() textColor: string = '';
  @Input() image: string = '';
  @Input() scrollSpeed: number = 500;
  @Input() scrollOffset: number = 0;
  @Input() modifyScroll: boolean = false;

  constructor() {}

  hover = false;

  iconShift = 0;

  calculateIconShift(): void {
    if (this.aRef) {
      const width = this.aRef.nativeElement.offsetWidth;
      this.iconShift = width - 24;
    }
  }
}
