import { Component, Input } from '@angular/core';
import { App } from '../../app';
import { LangService } from '../../lang-service';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { BtnClearImageRoll } from '../../shared/design/buttons/btn-clear-image-roll/btn-clear-image-roll';
import { BtnClearLineZ } from '../design/buttons/btn-clear-line-z/btn-clear-line-z';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [BtnClearImageRoll, BtnClearLineZ, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() textColor: string = '';

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  constructor(private langService: LangService) { }

  ngOnInit() {
    this.langToggle();
  }

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
