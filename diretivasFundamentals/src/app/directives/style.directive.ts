import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true,
})
export class StyleDirective {
  @HostBinding('style') myStyle: Partial<CSSStyleDeclaration> = {
    backgroundColor: 'black',
    color: 'white',
  };
}
