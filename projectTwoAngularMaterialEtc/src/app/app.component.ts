import {Component} from '@angular/core';
import {IUser} from './models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: IUser[] = [
    {
      name: 'João Silva',
      data_de_cadastro: '01/08/2023',
      status: false,
      endereco: {
        rua: "Rua das Flores",
        numero: 123,
        bairro: "Jardim das Rosas",
        cidade: "São Paulo",
        estado: "SP",
        cep: "01234-567"
      },
      telefone: "(11) 98765-4321",
      email: "joao.silva@email.com",
      funcao: "Desenvolvedor Front-End"
    },
    {
      name: 'Maria Fernandes',
      data_de_cadastro: '05/08/2023',
      status: false,
      endereco: {
        rua: "Avenida Brasil",
        numero: 456,
        bairro: "Centro",
        cidade: "Rio de Janeiro",
        estado: "RJ",

        cep: "12345-678"
      },
      telefone: "(21) 91234-5678",
      email: "maria.fernandes@email.com",
      funcao: "Desenvolvedora Back-End"
    },
    {
      name: 'Carlos Pereira',
      data_de_cadastro: '10/08/2023',
      status: true,
      endereco: {
        rua: "Travessa dos Pássaros",
        numero: 789,
        bairro: "Bairro das Águas",
        cidade: "Curitiba",
        estado: "PR",
        cep: "23456-789"
      },
      telefone: "(41) 99876-5432",
      email: "carlos.pereira@email.com",
      funcao: "Analista de Sistemas"
    },
    {
      name: 'Ana Sousa',
      data_de_cadastro: '15/08/2023',
      status: false,
      endereco: {
        rua: "Praça da Liberdade",
        numero: 101,
        bairro: "Liberdade",
        cidade: "Belo Horizonte",
        estado: "MG",
        cep: "34567-890"
      },
      telefone: "(31) 92345-6789",
      email: "ana.sousa@email.com",
      funcao: "Gerente de Projetos"
    },
    {
      name: 'Pedro Menezes',
      data_de_cadastro: '20/08/2023',

      status: true,

      endereco: {
        rua: "Rua da Praia",
        numero: 202,
        bairro: "Centro Histórico",
        cidade: "Salvador",
        estado: "BA",
        cep: "45678-901"
      },
      telefone: "(71) 93456-7890",
      email: "pedro.menezes@email.com",
      funcao: "Especialista em Segurança"
    }

  ];

  usersFiltered: IUser[] = this.users

  userDetail?: IUser

  sendDetailEmit(event: string) {
    const objDetail = this.users.find(obj => obj.name === event)

    this.userDetail = objDetail
  }

  playFilter(event: string) {
    if (event === '') {
      this.usersFiltered = this.users
      this.userDetail = undefined
    } else {
      this.usersFiltered = this.usersFiltered = this.users.filter(user => user.name === event)
      this.userDetail = undefined

    }

  }
}
