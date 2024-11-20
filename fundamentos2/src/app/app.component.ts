import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit, QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  arrButtons: string[] = ['Button 1', 'Button 2', 'Button 3']

  @ViewChildren('meuButton') buttonsEl?: QueryList<ElementRef<HTMLButtonElement>>;


  ngAfterViewInit() {
    console.log(this.buttonsEl);
  }

  changeColor(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;

    button.style.backgroundColor = 'black'
  }

  resetColor() {
    this.buttonsEl?.forEach(button => {
      const buttonElement = button.nativeElement
      buttonElement.style.backgroundColor = '#F0F0F0'
    })
  }

  // @ViewChild('myInput', {static: true}) myInputEL?: ElementRef<HTMLInputElement>
  // @ViewChild('myInput2') myInput2El?: ElementRef<HTMLInputElement>
  //
  // clicou(input: HTMLInputElement) {
  //   console.log(input)
  // }
  //
  // chamaInputEl() {
  //   if (this.myInputEL) this.myInputEL.nativeElement.value = 'FUI CLICADO, MAN'
  // }

  // ngAfterViewInit() {
  //   this.myInput2El?.nativeElement.focus()
  // }

  // ngOnInit() {
  //   this.myInputEL?.nativeElement.focus()
  // }
}
