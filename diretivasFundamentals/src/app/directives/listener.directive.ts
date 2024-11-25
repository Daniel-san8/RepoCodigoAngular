import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
  standalone: true,
})
export class ListenerDirective {
  @HostListener('click') clickListener() {
    console.log('opa');
  }
  @HostListener('keyup', ['$event']) keyUpListener(event: KeyboardEvent) {
    console.log('disparei keyup');
    console.log(event);
  }
}
