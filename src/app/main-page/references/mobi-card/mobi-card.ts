import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobi-card',
  imports: [CommonModule],
  templateUrl: './mobi-card.html',
  styleUrl: './mobi-card.scss'
})
export class MobiCard {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() link: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() isVisible: boolean = true;

  checkLinkedIn(): boolean {
    if (this.link && this.link.includes('linkedin.com')) {
      return true;
    }
    return false;
  }
}
