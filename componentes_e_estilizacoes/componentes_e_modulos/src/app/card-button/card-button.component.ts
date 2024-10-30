import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  // é possível usar template: `` para html curto
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Output('clickEmmiter') buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}
