import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appHighlightLetter]'
})

//Highlight single Letters Directive for ATF Title Animation
export class HighlightLetterDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const text = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = ''; // remove old Text to replace for Hover effect

    for (let char of text) {
      const span = this.renderer.createElement('span');
      span.innerText = char;

      // Save Orginal Text
      const originalChar = char;

      // Hover-Effekt: Invert Capitalize, change Color
      this.renderer.listen(span, 'mouseenter', () => {
        const swappedChar = this.swapCase(originalChar);
        span.innerText = swappedChar;
        this.renderer.setStyle(span, 'color', '#f7c518');
      });

      // Reset Hover effect
      this.renderer.listen(span, 'mouseleave', () => {
        span.innerText = originalChar;
        this.renderer.removeStyle(span, 'color');
      });

      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  private swapCase(char: string): string {
    if (char.toLowerCase() === char.toUpperCase()) {
      return char;
    }
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }
}
