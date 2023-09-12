//Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Por favor insira o 1º valor: ");
const segundoNumero = ask("Por favor insira o 2º valor: ");
const terceiroNumero = ask("Por favor insira o 3º valor: ");
const a = Number(primeiroNumero);
const b = Number(segundoNumero);
const c = Number(terceiroNumero);

if (a > b && a > c) {
    console.log(`O maior número é o: ${a}`);
}
if (b > a && b > c) {
    console.log(`O maior número é o: ${b}`);
}
if (c > a && c > b) {
    console.log(`O maior número é o: ${c}`);
}

if (a < b && a < c) {
    console.log(`O menor número é o: ${a}`);
}
if (b < a && b < c) {
    console.log(`O menor número é o: ${b}`);
}
if (c < a && c < b) {
    console.log(`O menor número é o: ${c}`);
}