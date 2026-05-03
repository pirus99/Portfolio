import { Component } from '@angular/core';
import { LangService } from '../../../lang-service';
import { App } from '../../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-peel',
  imports: [],
  templateUrl: './peel.html',
  styleUrl: './peel.scss',
})
export class Peel {
  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
  }

  constructor(private langService: LangService) { }

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

  peelMobile = 'none';
  peel = 'none';
  peelTrig = false;

  peelHandler() {
    this.peelDesk();
    this.peelMobi();
  }

  peelDesk() {
    if (this.peel === 'none' && !this.peelTrig) {
      const peelDefault = document.getElementById('peelDefault');
      if (peelDefault) {
        peelDefault.style.opacity = '1';
        peelDefault.style.zIndex = '10';
      }
    } else if (this.peel === 'start') {
      const peelDefault = document.getElementById('peelDefault');
      if (peelDefault) {
        peelDefault.style.opacity = '0';
        peelDefault.style.zIndex = '4';
      }
    } else {
      const peelHover = document.getElementById('peelHover');
      if (peelHover) {
        peelHover.style.opacity = '0';
        peelHover.style.zIndex = '4';
        this.peelTrig = true;
      }
    }
  }

  peelMobi() {
    if (this.peelMobile === 'none' && !this.peelTrig) {
      const peelDefault = document.getElementById('peelDefaultMobi');
      if (peelDefault) {
        peelDefault.style.opacity = '1';
        peelDefault.style.zIndex = '10';
      }
    } else {
      const peelDefault = document.getElementById('peelDefaultMobi');
      if (peelDefault) {
        peelDefault.style.opacity = '0';
        peelDefault.style.zIndex = '4';
      }
      setTimeout(() => {
        const peelHover = document.getElementById('peelHoverMobi');
        if (peelHover) {
          peelHover.style.opacity = '0';
          peelHover.style.zIndex = '4';
          this.peelTrig = true;
        }
      }, 100);
    }
  }
}
