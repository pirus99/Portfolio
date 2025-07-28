import { Component } from '@angular/core';
import { Atf } from './atf/atf';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from "./projects/projects";
import { References } from "./references/references";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-main-page',
  imports: [Atf, About, Skills, Projects, References, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
