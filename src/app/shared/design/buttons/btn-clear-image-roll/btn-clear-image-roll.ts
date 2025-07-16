import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-btn-clear-image-roll',
  imports: [NgStyle],
  templateUrl: './btn-clear-image-roll.html',
  styleUrl: './btn-clear-image-roll.scss'
})
export class BtnClearImageRoll {
  @ViewChild('aRef') aRef!: ElementRef;

  @Input() text: string = '';
  @Input() link: string = '';
  @Input() image: string = '';

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
