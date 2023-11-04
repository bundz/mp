//Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. 
//Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.

const prompt = require("prompt-sync");
const ask = prompt();

let array = [];

let numero1 = ask("Informe o primeiro numero: ");

    array.push(numero1);

let numero2 = ask("Informe o segundo numero: ");

    array.push(numero2);

let numero3 = ask("Informe o terceiro numero: ");

    array.push(numero3);

let numero4 = ask("Informe o quarto numero: ");

    array.push(numero4);

    let numero5 = ask("Informe o quinto numero: ");

    array.push(numero5);

let numero6 = ask("Informe o sexto numero: ");

    array.push(numero6);

let numero7 = ask("Informe o setimo numero: ");

    array.push(numero7);

let numero8 = ask("Informe o oitavo numero: ");

    array.push(numero8);

    let numero9 = ask("Informe o nono numero: ");

    array.push(numero9);

let numero10 = ask("Informe o deximo numero: ");

    array.push(numero10);

let array5 = [];

for (let i = 0; i < array.length; i ++) {
    novoNumero = Number(array[i]) * 5;
    array5.push(novoNumero[i]);
}

console.log(array5);