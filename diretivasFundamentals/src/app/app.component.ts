import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SemDiretivasComponent } from './components/sem-diretivas/sem-diretivas.component';
import { ComDiretivaComponent } from './components/com-diretiva/com-diretiva.component';
import { StyleDirective } from './directives/style.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { FocusSecondDirective } from './directives/focus-second.directive';
import { TesteServiceService } from './services/teste-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SemDiretivasComponent,
    ComDiretivaComponent,
    StyleDirective,
    ListenerDirective,
    InputBackgroundDirective,
    FocusSecondDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('minhaDiv') minhaDiv?: ElementRef<HTMLDivElement>;

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testeService: TesteServiceService
  ) {}

  createDiv() {
    this._testeService.create(this._elRef);
  }

  ngAfterViewInit() {
    if (!this.minhaDiv) return;

    this.minhaDiv.nativeElement.textContent = 'Nasci';
    this.minhaDiv.nativeElement.style.backgroundColor = 'red';
    const minhaOutraDiv = this._elRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;
    minhaOutraDiv.textContent = 'opa';
  }

  createElement() {
    const divEl = document.createElement('div');
    divEl.textContent = 'NASCIIIIIIII';
    divEl.classList.add('nasci');
    this._elRef.nativeElement.appendChild(divEl);
  }
}
