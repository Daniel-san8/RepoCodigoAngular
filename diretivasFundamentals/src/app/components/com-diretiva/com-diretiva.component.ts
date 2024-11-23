import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { DisabledDirective } from '../../directives/disabled.directive';

@Component({
  selector: 'app-com-diretiva',
  standalone: true,
  imports: [HighlightDirective, DisabledDirective],
  templateUrl: './com-diretiva.component.html',
  styleUrl: './com-diretiva.component.scss',
})
export class ComDiretivaComponent {}
