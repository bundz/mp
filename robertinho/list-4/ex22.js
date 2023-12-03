//Escreva uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna o somatório desse valor.

const prompt = require("prompt-sync");
const ask = prompt();

const value = ask("Digite um valor: ");

function somatorio (value) {
    let soma = 0;
    for (let i = 0; i < value; i ++){
        soma = soma + (i + 1);
    }

    return soma;
}

console.log(somatorio (value));