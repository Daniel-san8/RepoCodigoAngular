import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  standalone: true,
  imports: [],
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss',
})
export class XssComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  createElement(value: string) {
    const divEl = document.createElement('div');
    divEl.innerHTML = value;
    const nativeElementEl = this.elRef.nativeElement as HTMLDivElement;
    this.renderer.appendChild(nativeElementEl, divEl);
  }

  createElementCorrect(value: string) {
    const divEl = this.renderer.createElement('div') as HTMLDivElement;
    const text = this.renderer.createText(value);

    this.renderer.appendChild(divEl, text);
    this.renderer.appendChild(this.elRef.nativeElement, divEl);
    // this.renderer.setStyle(divEl, 'backgroundColor', 'red');
    this.renderer.addClass(divEl, 'minhaClasseXss');
  }
}
