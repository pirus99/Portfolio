import { Component } from '@angular/core';
import { TitleCirlceOrange } from '../../shared/design/titles/title-cirlce-orange/title-cirlce-orange';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-skills',
  imports: [TitleCirlceOrange],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
    this.peelHandler();
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

  iconsRow1 = [
    { name: 'HTML', icon: 'HTML.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'JavaScript', icon: 'Js.svg' },
    { name: 'Typescript', icon: 'Ts.svg' },
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'Firebase', icon: 'Firebase.svg' },
    { name: 'Git', icon: 'Git.svg' },
  ];

  iconsRow2 = [
    { name: 'Rest-Api', icon: 'Rest-Api.svg' },
    { name: 'Material-Design', icon: 'Material-Design.svg' },
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Linux', icon: 'Linux.svg' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'SQL', icon: 'SQL.svg' },
    { name: 'Shell Scripting', icon: 'Shell-Scripting.svg' },
  ]

  isVisible = false;

  peel = 'none';
  peelTrig = false;

  peelHandler() {
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
}
