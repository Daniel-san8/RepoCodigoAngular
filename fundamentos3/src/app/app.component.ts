import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MeuCompComponent } from './meu-comp/meu-comp.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, MeuCompComponent, NgTemplateOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  condition = false;
}
