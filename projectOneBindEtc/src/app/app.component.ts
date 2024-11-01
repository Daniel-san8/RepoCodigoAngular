import { Component } from '@angular/core';

interface ICardObj {
  color: 'purple' | 'orange';
  type: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cardObj: ICardObj = {
    color: 'orange',
    type: 'Simples',
    price: 100,
  };

  onAppButtonClicked() {
    console.log('recebi o click');
  }
}
