import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() link: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() isVisible: boolean = false;



}
