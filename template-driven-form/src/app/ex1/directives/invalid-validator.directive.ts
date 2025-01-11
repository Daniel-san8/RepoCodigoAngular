import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: InvalidValidatorDirective, multi: true}],
  standalone: true
})
export class InvalidValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    const validateControl = !control.value.includes('felipe')

    return validateControl ? null : { 'invalidText': true }
  }

}
