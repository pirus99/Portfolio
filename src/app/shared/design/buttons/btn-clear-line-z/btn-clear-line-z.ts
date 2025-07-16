import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-clear-line-z',
  imports: [],
  templateUrl: './btn-clear-line-z.html',
  styleUrl: './btn-clear-line-z.scss'
})
export class BtnClearLineZ implements OnInit{
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() left: number = -12;

  @HostBinding('style.--img-wrap-left') imgWrapLeft = '-12px';

  ngOnInit() {
    this.imgWrapLeft = this.left + 'px';
  }
}
