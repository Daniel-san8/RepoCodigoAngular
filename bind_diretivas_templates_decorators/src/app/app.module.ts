import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { StatusclassPipe } from './statusclass.pipe';

@NgModule({
  declarations: [AppComponent, PersonComponent, StatusclassPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
