import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputsModule } from './components/form-inputs/form-inputs.module';
import { TableUserComponent } from './components/table-user/table-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TableUserComponent,
  ],
  imports: [
    BrowserModule,
    FormInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
