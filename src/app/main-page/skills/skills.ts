import { Component } from '@angular/core';
import { Peel } from './peel/peel';
import { TitleCirlceOrange } from '../../shared/design/titles/title-cirlce-orange/title-cirlce-orange';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-skills',
  imports: [TitleCirlceOrange, Peel],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
  }

  constructor(private langService: LangService) { }

  langToggle() {
    this.lang = localStorage.getItem('lang') === 'langDE' ? langDE : langEN;
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
    { name: 'TypeScript', icon: 'Ts.svg' },
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'Material-Design', icon: 'Material-Design.svg' },
    { name: 'Git', icon: 'Git.svg' },
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Django', icon: 'Django.svg' },
    { name: 'Rest-Api', icon: 'Rest-Api.svg' },
    { name: 'SQL', icon: 'SQL.svg' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'Linux', icon: 'Linux.svg' },
    { name: 'Shell Scripting', icon: 'Shell-Scripting.svg' },
  ];

  iconsRow2 = [
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Django', icon: 'Django.svg' },
    { name: 'Rest-Api', icon: 'Rest-Api.svg' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'SQL', icon: 'SQL.svg' },
    { name: 'Linux', icon: 'Linux.svg' },
    { name: 'Shell Scripting', icon: 'Shell-Scripting.svg' },
  ]

  isMaxWith850() {
    return window.innerWidth <= 850;
  }

  isVisible = false;
}
