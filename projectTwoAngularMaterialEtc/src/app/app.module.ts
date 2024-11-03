import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputsModule } from './components/form-inputs/form-inputs.module';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
