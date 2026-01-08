import { Component, Input, HostBinding, SimpleChanges } from '@angular/core';
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
  @Input() autoShrink: boolean = false;
  @Input() imgWidth: number = 0;
  @Input() width: number = 0;

  @HostBinding('style.--img-wrap-width') imgWrapWidth = '0px';
  @HostBinding('style.--img-wrap-offset') imgWrapOffset = '0px';
  @HostBinding('style.--img-width') imgOutputWidth = '0px';
  
  offset = 0

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateWidth();
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['width'] || changes['imgWidth']) {
      this.updateWidth()
    }
  }

  updateWidth() {
    if (this.width == 0) {
    if(App.lang === 'langDE'){
      this.width = 600;
      this.offset = 0;
    } else {
      this.width = 280;
      this.offset = 0;
    }
    this.imgWidth = 290;
   }
    this.imgOutputWidth = `${this.imgWidth}px`;
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }

}
