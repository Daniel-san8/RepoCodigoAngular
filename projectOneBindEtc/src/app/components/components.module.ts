import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardComponent, ButtonComponent],
})
export class ComponentsModule {}
