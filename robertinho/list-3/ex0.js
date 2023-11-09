//VALIDADOR DE CPF

const prompt = require("prompt-sync");
const ask = prompt();

let inicio = ask("Você gostaria de inserir um cpf? ");

let soma = 0;
let cadastros = [];
let validade = 'Inválido';

while (inicio == "sim") {
    let nome = ask("Informe o nome: ");
    let cpf = ask("Informe o cpf: ");

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }

    if (soma % 2 == 0) {
        validade = 'Válido';
    }

    if (cpf.length < 11 || cpf.length > 11) {
        validade = 'Inválido';
    }

    cadastros.nome = nome;
    cadastros.cpf = cpf;
    cadastros.validade = validade;


    inicio = ask("Você gostaria de inserir um cpf? ");
}

console.log(cadastros);