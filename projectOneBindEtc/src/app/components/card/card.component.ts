import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'planType', required: true }) planType = '';
  @Input({ alias: 'planPrice', required: true }) planPrice = 0;

  @Input() cardStyle: 'orange' | 'purple' = 'orange';

  @Output() cardEmitt = new EventEmitter<void>();

  onButtonCardClicked() {
    this.cardEmitt.emit();
  }
}
