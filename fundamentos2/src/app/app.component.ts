import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @ViewChild('myInput', {static: true}) myInputEL?: ElementRef<HTMLInputElement>
  @ViewChild('myInput2') myInput2El?: ElementRef<HTMLInputElement>

  clicou(input: HTMLInputElement) {
    console.log(input)
  }

  chamaInputEl() {
    if (this.myInputEL) this.myInputEL.nativeElement.value = 'FUI CLICADO, MAN'
  }

  // ngAfterViewInit() {
  //   this.myInput2El?.nativeElement.focus()
  // }

  ngOnInit() {
    this.myInputEL?.nativeElement.focus()
  }
}
