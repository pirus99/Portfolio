import { Component } from '@angular/core';
import { buttonHoverAnimation } from '../../main-page/animation-module';
import { TitleLineBlue } from "../../shared/design/titles/title-line-blue/title-line-blue";
import { Technologies } from "./technologies/technologies";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-page',
  imports: [TitleLineBlue, Technologies, RouterLink],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  animations: [buttonHoverAnimation]
})
export class ProjectPage {
  standardHoverAnimation1 = false;
  standardHoverAnimation2 = false;

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
