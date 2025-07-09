import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  imports: [FormsModule, MatSlideToggleModule, ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    isChecked = false;
    primary = '#ff7300'
}
