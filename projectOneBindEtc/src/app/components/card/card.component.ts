import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'planType', required: true }) planType = '';
  @Input({ alias: 'planPrice', required: true }) planPrice = 0;

  @Input() cardStyle: 'orange' | 'purple' = 'orange';
}
