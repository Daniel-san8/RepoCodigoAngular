import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ alias: 'buttonText', required: true }) buttonText = '';
  @Input({ alias: 'classButton', required: true }) classButton:
    | 'white'
    | 'purple' = 'white';

  @Output('buttonClickedEmit') buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }
}
