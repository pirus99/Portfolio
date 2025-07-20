import { Component, HostBinding, Input } from '@angular/core';
import { LangService } from '../../../../lang-service';
import { App } from '../../../../app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-cirlce-orange',
  imports: [CommonModule,],
  templateUrl: './title-cirlce-orange.html',
  styleUrl: './title-cirlce-orange.scss'
})
export class TitleCirlceOrange {
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
    this.langWidthUpdate();
  }

  constructor(private langService: LangService) { }

  langWidthUpdate() {
    this.langService.aclickEvent.subscribe((message) => {
      setTimeout(() => {
        this.updateWidth();
      }, 10);
    })
  }

  updateWidth() {
    if (App.lang === 'langDE') {
      this.width = 600;
      this.offset = 24;
      this.text = this.text;
    } else {
      this.width = 320;
      this.offset = -12;
      this.text = this.text;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }
}
