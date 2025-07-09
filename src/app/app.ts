import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Portfolio';
}
