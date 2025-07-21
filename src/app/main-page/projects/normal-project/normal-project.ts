import { Component, Input } from '@angular/core';
import { buttonHoverAnimation } from '../../animation-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-normal-project',
  imports: [CommonModule],
  templateUrl: './normal-project.html',
  styleUrl: './normal-project.scss',
  animations: [buttonHoverAnimation]
})
export class NormalProject {
  @Input() title: string = 'Title';
  @Input() text: string = 'Text';
  @Input() btnText: string = 'Btn';
  @Input() btnLink: string = 'https://example.com';
  @Input() bgAlt: string = 'Background Image';
  @Input() bgImg: string = 'https://example.com/image.jpg';

  standardHoverAnimation = false;

  toggleHover() {
    this.standardHoverAnimation = !this.standardHoverAnimation;
  }

  hover = false;

  constructor() {}
}
