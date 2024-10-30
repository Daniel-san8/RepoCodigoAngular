import {
  Component,
  Input,
  numberAttribute,
  ViewEncapsulation,
} from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

function upperValue(value: string) {
  return value.toUpperCase();
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

  // private _planType = '';

  @Input({
    alias: 'planType',
    transform: (value: string) => upperValue(value),
  })
  planType = '';

  // @Input('planType') set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string {
  //   return this._planType;
  // }

  @Input({ required: true, alias: 'planPrice', transform: numberAttribute })
  planPrice: number = 0;

  buttonClicked(eve: boolean) {
    console.log('buttonClicked');

    console.log(eve);
    // this.planType = 'opa';
    // console.log('plantype: ' + this.planType);
  }
}
