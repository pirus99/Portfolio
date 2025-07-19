import { Component } from '@angular/core';
import { buttonHoverAnimationBlack } from '../animation-module';
import { App } from '../../app';
import { TitleLineBlue } from '../../shared/design/titles/title-line-blue/title-line-blue';
import { LangService } from '../../lang-service';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-about',
  imports: [TitleLineBlue],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [buttonHoverAnimationBlack]
})
export class About {
  ngOnInit() {
    this.langToggle();
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;
  isVisible = false;

  constructor(private langService: LangService) { }

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
