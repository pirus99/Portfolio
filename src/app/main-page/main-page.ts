import { Component } from '@angular/core';
import { Atf } from './atf/atf';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from "./projects/projects";
import { References } from "./references/references";

@Component({
  selector: 'app-main-page',
  imports: [Atf, About, Skills, Projects, References],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
