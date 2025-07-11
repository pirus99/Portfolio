import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-atf',
  imports: [],
  templateUrl: './atf.html',
  styleUrl: './atf.scss'
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
}
