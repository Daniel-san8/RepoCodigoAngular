import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('myInput') myInputEL?: ElementRef<HTMLInputElement>

  clicou(input: HTMLInputElement) {
    console.log(input)
  }

  chamaInputEl() {
    if(this.myInputEL) this.myInputEL.nativeElement.value = 'FUI CLICADO, MAN'

  }
  
}
