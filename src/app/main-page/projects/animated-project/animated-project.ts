import { Component, Input } from '@angular/core';
import { buttonHoverAnimation } from '../../animation-module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animated-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './animated-project.html',
  styleUrl: './animated-project.scss',
  animations: [buttonHoverAnimation]
})
export class AnimatedProject {
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

  animation = true;

  constructor() {}
}
