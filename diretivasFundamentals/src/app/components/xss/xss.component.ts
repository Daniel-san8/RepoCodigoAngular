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

    nativeElementEl.appendChild(divEl);
  }
}
