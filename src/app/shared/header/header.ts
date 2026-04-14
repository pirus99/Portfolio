import { Component } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { BtnClearCircle } from '../design/buttons/btn-clear-circle/btn-clear-circle';
import { BtnClearLineStraight } from '../design/buttons/btn-clear-line-straight/btn-clear-line-straight';
import { BtnClearLineWave } from '../design/buttons/btn-clear-line-wave/btn-clear-line-wave';
import { BtnClearLineZ } from '../design/buttons/btn-clear-line-z/btn-clear-line-z';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { LangService } from '../../lang-service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  imports: [FormsModule,
    BtnClearCircle,
    BtnClearLineStraight,
    BtnClearLineWave,
    BtnClearLineZ],
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
  modifyScroll: boolean = false;

  isProjectsRoute: boolean = false;

  constructor(private langService: LangService, public router: Router) { 
    this.loadLanguageFromStorage();
  }

  ngOnInit(): void {
    // Beim ersten Laden prüfen
    this.checkRoute(this.router.url);

    // Bei jeder Navigation prüfen
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects);
      });
  }

  loadLanguageFromStorage(): void {
    const savedLang = localStorage.getItem('lang');
    
    if (savedLang === 'langDE') {
      App.lang = 'langDE';
      this.lang = langDE;
      this.isChecked = true;
      this.langDEclasses = 'active';
      this.langENclasses = '';
    } else {
      App.lang = 'langEN';
      this.lang = langEN;
      this.isChecked = false;
      this.langENclasses = 'active';
      this.langDEclasses = '';
    }
  }

  toggleLanguage() {
    App.toggleLanguage();
    this.langToggle();
    this.langService.ClickEvent('');
  }

  setLangDE() {
    this.lang = langDE;
    this.isChecked = true;
    this.langENclasses = '';
    this.langDEclasses = 'active';
    App.lang = 'langDE';
    this.storeLangPreference();
    this.langService.ClickEvent('');
  }

  setLangEN() {
    this.lang = langEN;
    this.isChecked = false;
    this.langENclasses = 'active';
    this.langDEclasses = '';
    App.lang = 'langEN';
    this.storeLangPreference();
    this.langService.ClickEvent('');
  }

  langToggle() {
    if (App.lang === 'langDE') {
      this.lang = langDE;
      this.isChecked = true;
      this.langENclasses = '';
      this.langDEclasses = 'active';
    } else {
      this.lang = langEN;
      this.isChecked = false;
      this.langENclasses = 'active';
      this.langDEclasses = '';
    }
    this.storeLangPreference();
  }

  storeLangPreference() {
    localStorage.setItem('lang', App.lang);
  }

  private checkRoute(url: string): void {
    // URL kann z. B. '/projects' oder '/projects/...' sein
    this.isProjectsRoute = url.startsWith('/projects');
    if (this.isProjectsRoute || url === '/legal') {
      this.modifyScroll = false;
    } else {
      this.modifyScroll = true;
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
