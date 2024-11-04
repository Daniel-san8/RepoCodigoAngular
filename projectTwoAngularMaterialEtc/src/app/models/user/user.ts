export interface IUser {
    name: string,
    data_de_cadastro: string,
    status: boolean ,
    endereco: IAddresUser,
    telefone: string,
    email: string,
    funcao: string
}

interface IAddresUser {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string
}