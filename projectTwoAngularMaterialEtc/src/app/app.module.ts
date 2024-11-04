import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputsModule } from './components/form-inputs/form-inputs.module';
import { TableUserComponent } from './components/table-user/table-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { StatusPipe } from './components/detail-user/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableUserComponent,
    DetailUserComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    FormInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
