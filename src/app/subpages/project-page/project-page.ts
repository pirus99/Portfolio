import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { buttonHoverAnimation } from '../../main-page/animation-module';
import { TitleLineBlue } from "../../shared/design/titles/title-line-blue/title-line-blue";
import { Technologies } from "./technologies/technologies";
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-project-page',
  imports: [TitleLineBlue, Technologies, RouterLink, NgIf],
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
  isVisible = false;
  width: number = 0;
  imgWidth: number = 0;
  childrenReady = false;

  constructor(private langService: LangService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.langToggle();

    // set initial language
    if (App.lang === 'langDE') {
      this.lang = langDE;
    } else {
      this.lang = langEN;
    }

    // try to read route param immediately (avoid using default Input)
    const snapshotId = this.route.snapshot.paramMap.get('id');
    if (snapshotId && !isNaN(Number(snapshotId))) {
      this.projectIndex = Number(snapshotId);
    }
    this.computeWidths();
    this.childrenReady = true;

    // also listen for future route param changes
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const newIndex = (!idParam || isNaN(Number(idParam))) ? 0 : Number(idParam);
      if (newIndex !== this.projectIndex) {
        this.projectIndex = newIndex;
        this.computeWidths();
      }
      this.childrenReady = true;
    });
  }

  nextProject() {
    if (this.projectIndex < this.lang.projects.length - 1) {
      this.projectIndex++;
    } else {
      this.projectIndex = 0;
    }
    window.history.replaceState({}, '', `/projects/${this.projectIndex}`);
    this.computeWidths();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectIndex'] && !changes['projectIndex'].isFirstChange()) {
      this.computeWidths();
      this.childrenReady = true;
    }
  }

  langToggle() {
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
      } else {
        this.lang = langEN;
      }
      this.computeWidths();
    })
  }

  private computeWidths() {
    const hoverExtra = (this.lang && this.lang.projects && this.lang.projects[this.projectIndex] && this.lang.projects[this.projectIndex].hoverExtraWidth) || 0;
    this.width = 600 + hoverExtra;
    this.imgWidth = 300 + hoverExtra;
  }
}
