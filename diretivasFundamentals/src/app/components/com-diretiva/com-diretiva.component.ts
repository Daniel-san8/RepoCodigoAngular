import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-com-diretiva',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './com-diretiva.component.html',
  styleUrl: './com-diretiva.component.scss',
})
export class ComDiretivaComponent {}
