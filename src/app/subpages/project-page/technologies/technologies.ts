import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss'
})
export class Technologies {
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() name: string = '';

  ngOnInit() {
    if (!this.imgSrc) {
      if (this.name === "HTML") {
        this.imgSrc = 'img/skills/icons/HTML.svg';
        this.imgAlt = 'HTML logo';
      } else if (this.name === "CSS") {
        this.imgSrc = 'img/skills/icons/CSS.svg';
        this.imgAlt = 'CSS logo';
      } else if (this.name === "JavaScript") {
        this.imgSrc = 'img/skills/icons/Js.svg';
        this.imgAlt = 'JavaScript logo';
      } else if (this.name === "TypeScript") {
        this.imgSrc = 'img/skills/icons/Ts.svg';
        this.imgAlt = 'TypeScript logo';
      } else if (this.name === "Angular") {
        this.imgSrc = 'img/skills/icons/Angular.svg';
        this.imgAlt = 'Angular logo';
      } else if (this.name === "Firebase") {
        this.imgSrc = 'img/skills/icons/Firebase.svg';
        this.imgAlt = 'Firebase logo';
      }
    }
  }
}