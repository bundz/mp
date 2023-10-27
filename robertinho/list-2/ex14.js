//Faça um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos. Veja o Exemplo:

const prompt = require("prompt-sync");
const ask = prompt();

const size = ask("Diga o tamanho do triangulo que voce deseja: ");

let row = "";

for (let i = 0; i < size; i ++) {
    row = row + "*";

    console.log(row);
}