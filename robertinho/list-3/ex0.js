//VALIDADOR DE CPF

const prompt = require("prompt-sync");
const ask = prompt();

let inicio = ask("Você gostaria de inserir um cpf? ");

let soma = 0;

while (inicio == "sim") {
    let cpf = ask("Informe o cpf: ");

    if (cpf.length < 11 || cpf.length > 11) {
        console.log(`Dados incorretos`);
    }

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }

    if (soma % 11 == 0) {
        console.log(`${cpf} é um CPF válido!`);
    }

    inicio = ask("Você gostaria de inserir um cpf? ");
}
