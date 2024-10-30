import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-card-button',
  // é possível usar template: `` para html curto
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  isBool = false;

  @Input({ transform: booleanAttribute }) isDisabledButton = false;

  @Output('clickEmmiter') buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(this.isBool);
    this.isBool = !this.isBool;
  }
}
