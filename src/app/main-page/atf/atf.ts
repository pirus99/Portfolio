import { Component } from '@angular/core';
import { buttonHoverAnimation } from './animation-module';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import { BlueHoverBtn } from './blue-hover-btn/blue-hover-btn';
import * as langDE from './de.json';
import * as langEN from './en.json';


@Component({
  selector: 'app-atf',
  imports: [BlueHoverBtn],
  templateUrl: './atf.html',
  styleUrl: './atf.scss',
  animations: [buttonHoverAnimation]
})
export class Atf {
  ngOnInit() {
    this.langToggle();
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

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

  hover = false;

  standardHoverAnimation = false;

   toggleHover() {
     this.standardHoverAnimation = !this.standardHoverAnimation; 
  }  
}
