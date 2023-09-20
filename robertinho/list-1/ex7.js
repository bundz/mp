//Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Por favor insira o 1º valor: ");
const segundoNumero = ask("Por favor insira o 2º valor: ");
const terceiroNumero = ask("Por favor insira o 3º valor: ");
const valorUm = Number(primeiroNumero);
const valorDois = Number(segundoNumero);
const valorTres = Number(terceiroNumero);

let resultMaior = valorUm;
let resultMenor = valorUm;

if (valorDois > resultMaior) {
    resultMaior = valorDois;
}

if (valorTres > resultMaior) {
    resultMaior = valorTres;
}

if (resultMenor > valorDois) {
    resultMenor = valorDois;
}

if (resultMenor > valorTres) {
    resultMenor = valorTres;
}

console.log(`O maior numero e: ${resultMaior} e o menor e: ${resultMenor}`);