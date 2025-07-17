import { Component } from '@angular/core';
import { Atf } from './atf/atf';
import { About } from './about/about';

@Component({
  selector: 'app-main-page',
  imports: [Atf, About],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
