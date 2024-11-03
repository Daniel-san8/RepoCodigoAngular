import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrl: './form-inputs.component.scss'
})
export class FormInputsComponent {

  valuesInput: { name:string, status:'ativo' | 'inativo' | '' } = {
    name: '',
    status: ''
  }

  @Output() filterEmitt = new EventEmitter<string>()

  filter () {
    this.filterEmitt.emit(this.valuesInput.name)
  }

}
