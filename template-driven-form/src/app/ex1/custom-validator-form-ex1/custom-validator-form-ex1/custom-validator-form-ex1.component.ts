import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { InvalidValidatorDirective } from '../../directives/invalid-validator.directive';

@Component({
  selector: 'app-custom-validator-form-ex1',
  standalone: true,
  imports: [FormsModule, CommonModule, InvalidValidatorDirective],
  templateUrl: './custom-validator-form-ex1.component.html',
  styleUrl: './custom-validator-form-ex1.component.scss',
  viewProviders: [{
    provide: ControlContainer, useExisting: NgForm
  }]
})
export class CustomValidatorFormEx1Component {

}
