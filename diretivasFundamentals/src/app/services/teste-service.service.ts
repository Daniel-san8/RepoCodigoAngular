import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteServiceService {
  constructor() {}

  create(elRef: ElementRef) {
    const divEl = document.createElement('div');
    divEl.textContent = 'NASCIIIIIIII Service';
    divEl.classList.add('nasci');
    elRef.nativeElement.appendChild(divEl);
  }
}
