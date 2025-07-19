import { Component } from '@angular/core';
import { Atf } from './atf/atf';
import { About } from './about/about';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-main-page',
  imports: [Atf, About, Skills],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
