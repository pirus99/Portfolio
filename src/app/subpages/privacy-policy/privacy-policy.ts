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
}
