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
  @Input() lang = localStorage.getItem('lang') === 'langDE' ? 'langDE' : 'langEN';

  @HostBinding('style.--img-wrap-width') imgWrapWidth = '0px';
  @HostBinding('style.--img-wrap-offset') imgWrapOffset = '0px';

  width = 0;
  offset = 0

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateWidth();
      this.ComponentUpdate();
    }, 100);
    this.langWidthUpdate();
  }

  constructor(private langService: LangService) { }

  langWidthUpdate() {
    this.langService.aclickEvent.subscribe((message) => {
      setTimeout(() => {
        this.updateWidth();
        this.ComponentUpdate();
      }, 10);
    })
  }

  updateWidth() {
    if (App.lang === 'langDE') {
      if (window.innerWidth <= 350) {
        this.offset = -12;
        this.width = 240;
      } else {
        this.offset = 24;
        this.width = 600;
      }
    } else {
      this.width = 320;
      this.offset = -12;
    }
    this.imgWrapWidth = `${this.width}px`;
    this.imgWrapOffset = `${this.offset}px`;
  }

  ComponentUpdate() {
    const title = document.getElementById('orangeTitle');
    if (App.lang === 'langDE') {
      title?.classList.add('lang-de');
    } else {
      title?.classList.remove('lang-de');
    }
  }
}
