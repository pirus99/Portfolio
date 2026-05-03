import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
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
export class BlueHoverBtn implements AfterViewInit, OnDestroy {
  ngOnInit() {
    this.langToggle();
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  constructor(private langService: LangService, private renderer: Renderer2) { }

  langToggle() {
    this.lang = localStorage.getItem('lang') === 'langDE' ? langDE : langEN;
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
  start = true;

  private intervalId: ReturnType<typeof setInterval> | null = null;

  @ViewChild('textWrapper') textWrapper!: ElementRef;
  @ViewChild('defaultText') defaultText!: ElementRef;
  @ViewChild('hoverText') hoverText!: ElementRef;
  @ViewChild('btnWrapper') btnWrapper!: ElementRef;
  @ViewChild('buttonRef') buttonRef!: ElementRef;
  @ViewChild('hoverBlue') hoverBlue!: ElementRef;


  ngAfterViewInit(): void {
    this.updateWidth();
    this.animate();
  }

  animate() {
    let i = 0;
    this.intervalId = setInterval(() => {
      this.onMouseEnter();
      setTimeout(() => this.onMouseLeave(), 800);
      i++;
      if (i >= 1) {
        if (this.intervalId !== null) {
          clearInterval(this.intervalId);
          this.intervalId = null;
          if (window.innerWidth < 696){
            this.onMouseLeave();
            setTimeout(() => this.onMouseEnter(), 900);
          }
        }
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  onMouseEnter() {
    this.hover = true;
    this.updateWidth();
    this.renderer.addClass(this.hoverBlue.nativeElement, 'blue');
    this.renderer.addClass(this.btnWrapper.nativeElement, 'hovered');
  }

  onMouseLeave() {
    this.hover = false;
    this.updateWidth();
    this.renderer.removeClass(this.hoverBlue.nativeElement, 'blue');
    this.renderer.removeClass(this.btnWrapper.nativeElement, 'hovered');
  }

  onMobileClick() {
    if (this.intervalId !== null && this.start) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else if (this.intervalId === null && this.start) {
      this.animate();
    }
    this.hover = this.hover ? false : true;
    this.updateWidth();
    if (this.hover) {
      this.renderer.addClass(this.hoverBlue.nativeElement, 'blue');
      this.renderer.addClass(this.btnWrapper.nativeElement, 'hovered');
    } else {
      this.renderer.removeClass(this.hoverBlue.nativeElement, 'blue');
      this.renderer.removeClass(this.btnWrapper.nativeElement, 'hovered');
    }
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
