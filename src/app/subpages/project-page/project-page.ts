import { Component, Input } from '@angular/core';
import { buttonHoverAnimation } from '../../main-page/animation-module';
import { TitleLineBlue } from "../../shared/design/titles/title-line-blue/title-line-blue";
import { Technologies } from "./technologies/technologies";
import { RouterLink, ActivatedRoute } from '@angular/router';
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
  @Input() projectIndex: number = 2;
  standardHoverAnimation1 = false;
  standardHoverAnimation2 = false;
  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  constructor(private langService: LangService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.langToggle();

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (!idParam || isNaN(Number(idParam))) {
        this.projectIndex = 0;
      }

      this.projectIndex = Number(idParam);
    });
  }

  nextProject() {
    if (this.projectIndex < this.lang.projects.length - 1) {
      this.projectIndex++;
    } else {
      this.projectIndex = 0;
    }
    window.history.replaceState({}, '', `/projects/${this.projectIndex}`);
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
