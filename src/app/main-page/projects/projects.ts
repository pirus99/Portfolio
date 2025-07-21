import { Component } from '@angular/core';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { TitleLineYellow } from "../../shared/design/titles/title-line-yellow/title-line-yellow";
import { NormalProject } from "./normal-project/normal-project";
import { AnimatedProject } from "./animated-project/animated-project";


@Component({
  selector: 'app-projects',
  imports: [TitleLineYellow, NormalProject, AnimatedProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
  }

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

  isVisible = false;
}
