import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SemDiretivasComponent } from './components/sem-diretivas/sem-diretivas.component';
import { ComDiretivaComponent } from './components/com-diretiva/com-diretiva.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SemDiretivasComponent, ComDiretivaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
