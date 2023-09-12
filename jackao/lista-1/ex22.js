// Fácil 22 – Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Me diga um número: ");
const segundoNumero = ask("Me diga um outro número: ");

let primeiroValor = Number(primeiroNumero);
let segundoValor = Number(segundoNumero);

if(primeiroValor > segundoValor) {
    console.log(`O ${primeiroValor} é o maior!`);
} else {
    console.log(`O ${segundoValor} é o maior!`);
}