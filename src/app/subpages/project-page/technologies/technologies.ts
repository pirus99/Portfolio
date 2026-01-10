import { Component, Input } from '@angular/core';
import { OnChanges, SimpleChanges} from '@angular/core';

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
    this.setIcon();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.setIcon();
    }
  }

  setIcon(): void {
      if (this.name === "HTML") {
        this.imgSrc = 'img/skills/icons/HTML.svg';
        this.imgAlt = 'HTML logo';
      } else if (this.name === "CSS") {
        this.imgSrc = 'img/skills/icons/CSS.svg';
        this.imgAlt = 'CSS logo';
      } else if (this.name === "JavaScript") {
        this.imgSrc = 'img/skills/icons/Js.svg';
        this.imgAlt = 'JavaScript logo';
      } else if (this.name === "Angular") {
        this.imgSrc = 'img/skills/icons/Angular.svg';
        this.imgAlt = 'Angular logo';
      } else if (this.name === "Firebase") {
        this.imgSrc = 'img/skills/icons/Firebase.svg';
        this.imgAlt = 'Firebase logo';
      } else if (this.name === "Django") {
        this.imgSrc = 'img/skills/icons/Django.svg';
        this.imgAlt = 'Django logo';
      } else if (this.name === "Python") {
        this.imgSrc = 'img/skills/icons/Python.svg';
        this.imgAlt = 'Python logo';
      } else if (this.name === "Docker") {
        this.imgSrc = 'img/skills/icons/Docker.svg';
        this.imgAlt = 'Docker logo';
      } else if (this.name === "Type-Script") {
        this.imgSrc = 'img/skills/icons/Ts.svg';
        this.imgAlt = 'TypeScript logo';
      } else if (this.name === "Django Rest Framework") {
        this.imgSrc = 'img/skills/icons/DRF.svg';
        this.imgAlt = 'Django Rest Framework logo';
      }
  }
}