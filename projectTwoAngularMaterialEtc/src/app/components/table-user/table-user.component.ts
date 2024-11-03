import { Component } from '@angular/core';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.scss'
})
export class TableUserComponent {
  users = [
    {name: 'João Silva', 'data_de_cadastro': '01/08/2023', status: 'Inativo'},
    {name: 'Maria Fernandes', 'data_de_cadastro': '05/08/2023', status: 'Inativo'},
    {name: 'Carlos Pereira', 'data_de_cadastro': '10/08/2023', status: 'Ativo'},
    {name: 'Ana Sousa', 'data_de_cadastro': '15/08/2023', status: 'Inativo'},
    {name: 'Pedro Menezes', 'data_de_cadastro': '20/08/2023', status: 'Ativo'}
  ]
}
