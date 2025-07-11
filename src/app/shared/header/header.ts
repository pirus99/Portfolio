import { Component } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { LangService } from '../../lang-service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, MatSlideToggleModule,],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  isChecked = false;
  primary = '#ff7300';
  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  constructor(private langService: LangService) { }

  toggleLanguage() {
    App.toggleLanguage();
    this.langService.ClickEvent('')
    this.langToggle();
  }

  langToggle() { 
    if (App.lang === 'langDE') {
      this.lang = langDE;
    } else {
      this.lang = langEN;
    } 
  }
}
