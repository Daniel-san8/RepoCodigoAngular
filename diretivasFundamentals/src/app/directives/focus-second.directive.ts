import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appFocusSecond]',
  standalone: true,
})
export class FocusSecondDirective implements AfterViewInit {
  // @HostBinding('style.backgroundColor') bgColor = 'blue';
  // @HostBinding('textContent') text = 'sou azul';

  constructor(private readonly _elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const inputList = Array.from(
      this._elRef.nativeElement.querySelectorAll('input')
    ) as HTMLInputElement[];

    if (inputList.length > 1) inputList[1].focus();
  }
}
