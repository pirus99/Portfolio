import { Component, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { App } from '../../../../app';

@Component({
  selector: 'app-btn-clear-line-straight',
  imports: [],
  templateUrl: './btn-clear-line-straight.html',
  styleUrl: './btn-clear-line-straight.scss'
})
export class BtnClearLineStraight {
  @Input() text: string = '';
  @Input() link: string = '';

  @ViewChild('textP') textP!: ElementRef;

  @HostBinding('style.--img-wrap-width') imgWrapWidth = '0px';
  @HostBinding('style.--img-wrap-offset') imgWrapOffset = '0px';

  width = 0;
  offset = 0

  updateWidth() {
    if(App.lang === 'langDE'){
      this.width = 220;
      this.offset = -10;
    } else {
      this.width = 100;
      this.offset = -30;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }
}
