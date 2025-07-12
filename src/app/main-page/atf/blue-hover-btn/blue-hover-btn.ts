import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { App } from '../../../app';
import { LangService } from '../../../lang-service';
import { NgStyle } from '@angular/common';
import * as langDE from './de.json';
import * as langEN from './en.json';

@Component({
  selector: 'app-blue-hover-btn',
  imports: [NgStyle],
  templateUrl: './blue-hover-btn.html',
  styleUrl: './blue-hover-btn.scss'
})
export class BlueHoverBtn implements AfterViewInit {
  ngOnInit() {
    this.langToggle();
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  constructor(private langService: LangService, private renderer: Renderer2) { }

  langToggle() {
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
        setTimeout(() => {
          this.updateWidth();
        }, 10);
      } else {
        this.lang = langEN;
        setTimeout(() => {
          this.updateWidth();
        }, 10);
      }
    })
  }

  hover = false;

  @ViewChild('textWrapper') textWrapper!: ElementRef;
  @ViewChild('defaultText') defaultText!: ElementRef;
  @ViewChild('hoverText') hoverText!: ElementRef;
  @ViewChild('btnWrapper') btnWrapper!: ElementRef;
  @ViewChild('buttonRef') buttonRef!: ElementRef;


  ngAfterViewInit(): void {
    this.updateWidth();
  }

  onMouseEnter() {
    this.hover = true;
    this.updateWidth();
    this.renderer.addClass(this.btnWrapper.nativeElement, 'hovered');
  }

  onMouseLeave() {
    this.hover = false;
    this.updateWidth();
    this.renderer.removeClass(this.btnWrapper.nativeElement, 'hovered');
  }

  updateWidth() {
    const activeText = this.hover ? this.hoverText.nativeElement : this.defaultText.nativeElement;


    const width = activeText.offsetWidth;

    this.renderer.setStyle(
      this.textWrapper.nativeElement,
      'width',
      width + 'px'
    );
  }

  iconShift = 0;

  calculateIconShift(): void {
    if (this.buttonRef) {
      const width = this.buttonRef.nativeElement.offsetWidth;
      this.iconShift = width - 24;
    }
  }
}
