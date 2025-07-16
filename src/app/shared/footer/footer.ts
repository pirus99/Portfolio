import { Component } from '@angular/core';
import { App } from '../../app';
import { LangService } from '../../lang-service';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { BtnClearImageRoll } from '../../shared/design/buttons/btn-clear-image-roll/btn-clear-image-roll';

@Component({
  selector: 'app-footer',
  imports: [BtnClearImageRoll],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
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
