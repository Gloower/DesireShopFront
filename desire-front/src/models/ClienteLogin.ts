interface ClienteLogin {

    id: number
    nome: string
    email: string
    senha: string
    token?: string | null
}

export default ClienteLogin