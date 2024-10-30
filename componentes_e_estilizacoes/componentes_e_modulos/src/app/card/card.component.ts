import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CardComponent {
  // @ts-ignore
  // plano: IPlano = {
  //   infos: {
  //     tipo: 'Simples',
  //     preco: 100,
  //   },
  // };

  @Input('planType') planType: string = '';
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;

  buttonClicked(eve: boolean) {
    console.log('buttonClicked');

    console.log(eve);
  }
}
