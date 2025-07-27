import { Component } from '@angular/core';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { CommonModule } from '@angular/common';
import { Card } from "./card/card";
import { MobiCard } from './mobi-card/mobi-card';

@Component({
  selector: 'app-references',
  imports: [CommonModule, Card, MobiCard],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  ngOnInit() {
    this.langToggle();
  }

  isVisible = false;

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

  card0Hov = false;
  card1Hov = false;
  card2Hov = false;

}
