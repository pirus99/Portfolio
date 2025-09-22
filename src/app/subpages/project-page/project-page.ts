import { Component } from '@angular/core';
import { buttonHoverAnimation } from '../../main-page/animation-module';
import { TitleLineBlue } from "../../shared/design/titles/title-line-blue/title-line-blue";

@Component({
  selector: 'app-project-page',
  imports: [ TitleLineBlue],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  animations: [buttonHoverAnimation]
})
export class ProjectPage {
  standardHoverAnimation1 = false;
  standardHoverAnimation2 = false;
}
