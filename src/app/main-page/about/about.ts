import { App } from '../../app';
import { buttonHoverAnimationBlack } from '../animation-module';
import { Component } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { TitleLineBlue } from '../../shared/design/titles/title-line-blue/title-line-blue';
import { LangService } from '../../lang-service';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-about',
  imports: [TitleLineBlue, NgxPageScrollModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [buttonHoverAnimationBlack]
})
export class About {
  langDE = langDE;
  langEN = langEN;
  lang = langEN;
  isVisible = false;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.langToggle();
  }

  langToggle() {
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
      } else {
        this.lang = langEN;
      }
    })
  }

  standardHoverAnimation = false;

   toggleHover() {
     this.standardHoverAnimation = !this.standardHoverAnimation; 
  }  
}
