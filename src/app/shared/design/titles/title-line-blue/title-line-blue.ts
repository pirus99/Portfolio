import { Component, Input, HostBinding } from '@angular/core';
import { App } from '../../../../app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-line-blue',
  imports: [CommonModule],
  templateUrl: './title-line-blue.html',
  styleUrl: './title-line-blue.scss'
})
export class TitleLineBlue {

  @Input() text: string = '';
  @Input() link: string = '';
  @Input() textColor: string = '';
  @Input() isVisible: boolean = false;
  @Input() projectTitle: boolean = false;

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
      this.width = 600;
      this.offset = 0;
    } else {
      this.width = 250;
      this.offset = 0;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }

}
