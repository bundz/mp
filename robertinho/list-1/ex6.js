//Faça um programa que leia três números, verifique (usando if e else), e mostre o maior deles.

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Por favor insira o 1º numero: ");
const segundoNumero = ask("Por favor insira o 2º numero: ");
const terceiroNumero = ask("Por favor insira o 3º numero: ");
const valorUm = Number(primeiroNumero);
const valorDois = Number(segundoNumero);
const valorTres = Number(terceiroNumero);

let result=valorUm; 

if (valorDois > result) {
    result = valorDois;
}

if (valorTres > result) {
    result = valorTres;
}

console.log(`O maior numero: ${result}`);