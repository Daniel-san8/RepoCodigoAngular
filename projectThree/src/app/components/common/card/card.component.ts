import { CurrencyPipe } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true, alias: 'iconCard' }) iconCard = '';
  @Input({ required: true, alias: 'textCard' }) textCard = '';
  @Input({ required: false, alias: 'valueCard', transform: numberAttribute })
  valueCard = 0;
  // @Input({ required: true, alias: 'colorBg' }) colorBg = '';
}
