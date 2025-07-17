import { Component, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { App } from '../../../../app';

@Component({
  selector: 'app-title-line-blue',
  imports: [],
  templateUrl: './title-line-blue.html',
  styleUrl: './title-line-blue.scss'
})
export class TitleLineBlue {

  @Input() text: string = '';
  @Input() link: string = '';

  @ViewChild('textP') textP!: ElementRef;

  @HostBinding('style.--img-wrap-width') imgWrapWidth = '0px';
  @HostBinding('style.--img-wrap-offset') imgWrapOffset = '0px';

  width = 0;
  offset = 0

  updateWidth() {
    if(App.lang === 'langDE'){
      this.width = 600;
      this.offset = 0;
    } else {
      this.width = 450;
      this.offset = 0;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }

}
