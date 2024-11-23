import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true,
})
export class DisabledDirective {
  @HostBinding('disabled') attrDisabled = false;
  @HostListener('click') toogleDisabled() {
    this.attrDisabled = true;
  }
}
