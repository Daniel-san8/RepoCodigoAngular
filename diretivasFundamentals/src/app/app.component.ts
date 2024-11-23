import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SemDiretivasComponent } from './components/sem-diretivas/sem-diretivas.component';
import { ComDiretivaComponent } from './components/com-diretiva/com-diretiva.component';
import { StyleDirective } from './directives/style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SemDiretivasComponent,
    ComDiretivaComponent,
    StyleDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
