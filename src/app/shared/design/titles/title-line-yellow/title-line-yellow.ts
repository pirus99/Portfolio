import { Component, Input, HostBinding } from '@angular/core';
import { App } from '../../../../app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-line-yellow',
  imports: [CommonModule],
  templateUrl: './title-line-yellow.html',
  styleUrl: './title-line-yellow.scss'
})
export class TitleLineYellow {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() isVisible: boolean = false;

  @HostBinding('style.--img-wrap-width') imgWrapWidth = '0px';
  @HostBinding('style.--img-wrap-offset') imgWrapOffset = '0px';

  width = 0;
  offset = 0

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateWidth();
    }, 100);
  }

  updateWidth() {
    if(App.lang === 'langDE'){
      this.width = 450;
      this.offset = -24;
    } else {
      this.width = 450;
      this.offset = -24;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }

}
