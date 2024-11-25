import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]',
  standalone: true,
})
export class InputBackgroundDirective {
  @Input('appInputBackground') appInputBackground = '';

  @HostBinding('style.backgroundColor') bgColor = '';
  @HostListener('focus', ['$event']) mudaCor(event: PointerEvent) {
    this.bgColor = this.appInputBackground;
  }
  // @ViewChildren('meuInput') meuInput?: ElementRef<HTMLInputElement>;

  // ngAfterContentInit(): void {
  //   if (this.meuInput)
  //     this.meuInput.nativeElement.style.backgroundColor =
  //       this.appInputBackground;
  //   alert('olha eu');
  // }
}
