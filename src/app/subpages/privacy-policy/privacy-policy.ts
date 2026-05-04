import { Component } from '@angular/core';
import { App } from '../../app';
import { Footer } from '../../shared/footer/footer';
import { TitleLineBlue } from '../../shared/design/titles/title-line-blue/title-line-blue';
import { LangService } from '../../lang-service';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-privacy-policy',
  imports: [TitleLineBlue, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  ngOnInit() {
    this.langToggle();
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;
  isVisible = false;
  textSize = 64;

  constructor(private langService: LangService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateFont();
    }, 200);
  }

  langToggle() {
    this.lang = localStorage.getItem('lang') === 'langDE' ? langDE : langEN;
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
      } else {
        this.lang = langEN;
      }
    })
  }

  updateFont() {
    if (window.innerWidth < 330) {
      this.textSize = 32;
    } else if (window.innerWidth < 390) {
      this.textSize = 42;
    } else if (window.innerWidth < 480) {
      this.textSize = 52;
    }
  }
}
