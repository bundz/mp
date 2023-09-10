//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Por favor insira o 1º valor: ");
const segundoNumero = ask("Por favor insira o 2º valor: ");
const terceiroNumero = ask("Por favor insira o 3º valor: ");
const a = Number(primeiroNumero);
const b = Number(segundoNumero);
const c = Number(terceiroNumero);

let menor = 0;

if (a < b && a < c) {
    menor = a;
}
if (b < a && b < c) {
    menor = b;
}
if (c < a && c < b) {
    menor = c;
}

console.log(`Dos 3 valores mostrados, vale mais a pena comprar o que vale: ${menor}`);