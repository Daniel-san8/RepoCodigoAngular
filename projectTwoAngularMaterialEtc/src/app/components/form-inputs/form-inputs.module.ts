import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormInputsComponent } from './form-inputs.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FormInputsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [FormInputsComponent]
})
export class FormInputsModule { }
