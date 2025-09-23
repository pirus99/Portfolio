import { Component } from '@angular/core';
import { buttonHoverAnimation } from '../../main-page/animation-module';
import { TitleLineBlue } from "../../shared/design/titles/title-line-blue/title-line-blue";
import { Technologies } from "./technologies/technologies";
import { RouterLink } from '@angular/router';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-project-page',
  imports: [TitleLineBlue, Technologies, RouterLink],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  animations: [buttonHoverAnimation]
})
export class ProjectPage {
  projectIndex: number = 2;
  standardHoverAnimation1 = false;
  standardHoverAnimation2 = false;
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

  technologies: { name:string }[] =
   [
     { name: "HTML" },
     { name: "CSS" },
     { name: "JavaScript" },
     { name: "TypeScript" },
     { name: "Angular" },
     { name: "Firebase" }
   ];
}
