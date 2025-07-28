import { Component } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BtnClearCircle } from '../design/buttons/btn-clear-circle/btn-clear-circle';
import { BtnClearLineStraight } from '../design/buttons/btn-clear-line-straight/btn-clear-line-straight';
import { BtnClearLineWave } from '../design/buttons/btn-clear-line-wave/btn-clear-line-wave';
import { BtnClearLineZ } from '../design/buttons/btn-clear-line-z/btn-clear-line-z';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { LangService } from '../../lang-service';


@Component({
  selector: 'app-header',
  imports: [FormsModule,
    MatSlideToggleModule,
    BtnClearCircle,
    BtnClearLineStraight,
    BtnClearLineWave,
    BtnClearLineZ,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  isChecked = false;
  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  langENclasses = 'active';
  langDEclasses = '';

  constructor(private langService: LangService) { }

  toggleLanguage() {
    App.toggleLanguage();
    this.langService.ClickEvent('')
    this.langToggle();
  }

  setLangDE() {
    App.lang = 'langDE';
    this.lang = langDE;
    this.langService.ClickEvent('')
    this.langENclasses = '';
    this.langDEclasses = 'active';
  }

  setLangEN() {
    App.lang = 'langEN';
    this.lang = langEN;
    this.langService.ClickEvent('');
    this.langENclasses = 'active';
    this.langDEclasses = '';
  }

  langToggle() {
    if (App.lang === 'langDE') {
      this.lang = langDE;
      this.langENclasses = '';
      this.langDEclasses = 'active';
    } else {
      this.lang = langEN;
      this.langENclasses = 'active';
      this.langDEclasses = '';
    }
  }



  toggleBurgerMenu() {
    let burgerMenu = document.getElementById('burgerMenu');
    let overlay = document.getElementById('mobileMenu');

    if (burgerMenu) {
      burgerMenu.classList.toggle("close");
      overlay?.classList.toggle("overlay");
    }
  }
}
