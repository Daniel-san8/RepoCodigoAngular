import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.background-color') bgColor = 'transparent';
  @HostListener('mouseover') eventOver() {
    this.bgColor = 'red';
  }
  @HostListener('mouseout') eventOut(event: MouseEvent) {
    this.bgColor = 'transparent';
  }

  constructor() {}
}
