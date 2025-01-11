import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ControlContainer, FormsModule, NgForm, NgModel } from '@angular/forms';
import { CustomValidatorFormEx1Component } from "./ex1/custom-validator-form-ex1/custom-validator-form-ex1/custom-validator-form-ex1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomValidatorFormEx1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [{
    provide: ControlContainer, useExisting: NgForm
  },]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl?: NgModel;

  ngAfterViewInit(): void {}

  send() {
    if (this.inputEl?.valid && this.inputEl.touched) {
      console.log(this.inputEl);
    }
  }
}
