const contatos = [
    {
        id: "1",
        nome: "Ana Souza",
        telefone: "9999-9999",
        email: "ana@email.com",
        tags: ["cliente", "vip"],
        criadoEm: "2026-06-23T00:00:00.000Z"
    },
    {
        id: "2",
        nome: "Bruno Lima",
        telefone: "9888-1234",
        email: "bruno@gmail.com",
        tags: ["fornecedor"],
        criadoEm: "2026-06-23T01:15:00.000Z"
    },
    {
        id: "3",
        nome: "Carla Mendes",
        telefone: "9777-4567",
        email: "carla@email.com",
        tags: ["cliente"],
        criadoEm: "2026-06-23T02:30:00.000Z"
    },
    {
        id: "4",
        nome: "Daniel Rocha",
        telefone: "9666-7890",
        email: "daniel@empresa.com",
        tags: ["trabalho", "dev"],
        criadoEm: "2026-06-23T03:45:00.000Z"
    },
    {
        id: "5",
        nome: "Eduarda Alves",
        telefone: "9555-1111",
        email: "eduarda@gmail.com",
        tags: ["amigo"],
        criadoEm: "2026-06-23T04:10:00.000Z"
    },
    {
        id: "6",
        nome: "Felipe Costa",
        telefone: "9444-2222",
        email: "felipe@empresa.com",
        tags: ["trabalho", "cliente"],
        criadoEm: "2026-06-23T05:25:00.000Z"
    },
    {
        id: "7",
        nome: "Gabriela Martins",
        telefone: "9333-3333",
        email: "gabriela@hotmail.com",
        tags: ["familia"],
        criadoEm: "2026-06-23T06:40:00.000Z"
    },
    {
        id: "8",
        nome: "Henrique Barros",
        telefone: "9222-4444",
        email: "henrique@email.com",
        tags: ["cliente", "recorrente"],
        criadoEm: "2026-06-23T07:55:00.000Z"
    },
    {
        id: "9",
        nome: "Isabela Ferreira",
        telefone: "9111-5555",
        email: "isabela@startup.com",
        tags: ["startup", "dev"],
        criadoEm: "2026-06-23T08:20:00.000Z"
    },
    {
        id: "10",
        nome: "João Pedro",
        telefone: "9000-6666",
        email: "joao@gmail.com",
        tags: ["amigo", "faculdade"],
        criadoEm: "2026-06-23T09:35:00.000Z"
    },
    {
        id: "11",
        nome: "Larissa Nunes",
        telefone: "8999-7777",
        email: "larissa@empresa.com",
        tags: ["trabalho"],
        criadoEm: "2026-06-23T10:50:00.000Z"
    },
    {
        id: "12",
        nome: "Marcos Vinícius",
        telefone: "8888-8888",
        email: "marcos@hotmail.com",
        tags: ["cliente", "financeiro"],
        criadoEm: "2026-06-23T11:05:00.000Z"
    }
];

const novo_contato = {
    id: "100",
    nome: "Ana Souza",
    telefone: "9999-9999",
    email: "ana@email.com",
    tags: ["cliente", "vip"],
    criadoEm: "2026-06-23T00:00:00.000Z"
}

function adicionarContato(contatos, novoContato) {
    return [...contatos, novoContato]
}

function listarContatos(contatos) {
    return contatos
}

function buscarPorNome(contatos, nomeBuscado) {
    return contatos.filter(contato => contato.nome.match(nomeBuscado))
}

function buscarPorEmail(contatos, emailBuscado) {
    return contatos.filter(contato => contato.email === emailBuscado)
}

function atualizarContato(contatos, id, dadosAtualizados) {
    // atualizar apenas os campos enviados
}

function removerContato(contatos, id) {
    const contatos_para_deletar = [...contatos]

    const deletado = contatos_para_deletar.findIndex(contato => contato.id === `${id}`)

    contatos_para_deletar.splice(deletado, 1)

    return contatos_para_deletar
}

function ordenarPorNome(contatos) {
    // ordenar contatos pelo nome
}

function filtrarPorDominioEmail(contatos, dominio) {
    // exemplo de domínio: "gmail.com", "empresa.com", "email.com"
}

// console.log(listarContatos(contatos));

// console.log(removerContato(contatos, 12))

// console.log(adicionarContato(contatos, novo_contato))

// console.log(buscarPorNome(contatos, "Bruno"));
//
// console.log(buscarPorEmail(contatos, "bruno@gmail.com"));
//
// console.log(filtrarPorDominioEmail(contatos, "gmail.com"));
//
// console.log(ordenarPorNome(contatos));

