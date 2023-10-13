//Faça um programa que receba dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.

const prompt = require("prompt-sync");
const ask = prompt();

let numeros = 10;
let entre30e90 = 0;
let array = [];

for (let i = 0; i < numeros; i = i + 1) {
    const numero = ask("Digite um numero: ");
    let numeroInserido = Number(numero);

    if (numeroInserido >= 30 && numeroInserido <= 90) {
        entre30e90 = entre30e90 + 1;
        array.push(numeroInserido);
    }
}

console.log(`Quantidade de numeros entre 30 e 90: ${entre30e90}`);
console.log(array);