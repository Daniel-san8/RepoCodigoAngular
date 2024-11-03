import { Component } from '@angular/core';
import { meuPipe } from './statusclass.pipe';

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
  pessoas = [
    {
      name: 'Daniel San',
      status: meuPipe.Active
    },
    {
      name: 'Gabriel',
      status: meuPipe.Blocked

    },{
      name: 'Fernando',
      status: meuPipe.Partial

    },
  ]

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
