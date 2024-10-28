import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = 'texto inicial alterado';
  inputType = 'text';
  isDisabled = false;

  enabledInput() {
    this.isDisabled = false;
  }
  disabledInput() {
    this.isDisabled = true;
  }

  mudarTipo() {
    if (this.inputType === 'text') {
      this.inputType = 'password';
    } else {
      this.inputType = 'text';
    }
  }
}
