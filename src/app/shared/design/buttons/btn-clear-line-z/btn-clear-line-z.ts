import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-btn-clear-line-z',
  imports: [CommonModule, NgxPageScrollModule],
  templateUrl: './btn-clear-line-z.html',
  styleUrl: './btn-clear-line-z.scss'
})
export class BtnClearLineZ implements OnInit{
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() left: number = -12;
  @Input() textColor: string = '';
  @Input() modifyScroll: boolean = false;
  @Input() scrollSpeed: number = 500;
  @Input() scrollOffset: number = 0;

  @HostBinding('style.--img-wrap-left') imgWrapLeft = '-12px';

  ngOnInit() {
    this.imgWrapLeft = this.left + 'px';
  }
}
