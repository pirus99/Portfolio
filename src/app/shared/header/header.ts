import { Component } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BtnClearCircle } from '../design/buttons/btn-clear-circle/btn-clear-circle';
import { BtnClearLineStraight } from '../design/buttons/btn-clear-line-straight/btn-clear-line-straight';
import { BtnClearLineWave } from '../design/buttons/btn-clear-line-wave/btn-clear-line-wave';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { LangService } from '../../lang-service';
import { BtnClearLineZ } from '../design/buttons/btn-clear-line-z/btn-clear-line-z';



@Component({
  selector: 'app-header',
  imports: [FormsModule, 
            MatSlideToggleModule, 
            BtnClearCircle, 
            BtnClearLineStraight, 
            BtnClearLineWave,
            BtnClearLineZ
          ],
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
