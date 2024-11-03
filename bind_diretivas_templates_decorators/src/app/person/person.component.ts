import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss', '../app.component.scss'],
})
export class PersonComponent {
  personSelectedIndex?: number;

  listPessoas = [
    {
      name: 'Daniel San',
      age: 21,
    },
    {
      name: 'Fernando',
      age: 4,
    },
    {
      name: 'Joelma',
      age: 11,
    },
    {
      name: 'João',
      age: 33,
    },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
