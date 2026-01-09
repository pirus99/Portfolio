import { Component } from '@angular/core';
import { buttonHoverAnimation } from '../animation-module';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import { BlueHoverBtn } from './blue-hover-btn/blue-hover-btn';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { HighlightLetterDirective } from './highlight';
import { NgxPageScrollModule } from 'ngx-page-scroll';


@Component({
  selector: 'app-atf',
  imports: [BlueHoverBtn, HighlightLetterDirective, NgxPageScrollModule],
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

  imageHover = false;
  colorImage() {
    const greyImage = document.getElementById('greyImage');
    if(this.imageHover){
      if (greyImage) {
        greyImage.classList.add('hover');
      }} else if (greyImage) {
        greyImage.classList.remove('hover');
      }  
  }
}
