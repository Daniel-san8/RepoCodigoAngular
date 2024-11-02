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
  buttonTitle = 'title do botão';
  buttonDisabled = false;
  isActive = false;
  valueInput = {
    name: '',
    senha: '',
  };

  pessoa = {
    name: 'Daniel San',
  };

  listPessoas = [
    {
      name: 'Daniel San',
      age: 21,
    },
    {
      name: 'Fernando',
      age: 4,
    },
    {
      name: 'Joelma',
      age: 11,
    },
    {
      name: 'João',
      age: 33,
    },
  ];

  mudarStatus() {
    this.isActive = !this.isActive;
  }

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

  handleKeyUp(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;

    this.inputText = input.value;
  }
}
