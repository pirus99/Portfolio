import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { MainPage } from './main-page/main-page';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
  public static lang: string = 'langEN';

  public static toggleLanguage() {
       if (this.lang === 'langEN') {
          this.lang = 'langDE'; // Update the language in the
       } else {
          this.lang = 'langEN';
       }
      }
}

