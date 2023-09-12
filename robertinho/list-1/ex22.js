//Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor.

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Informe o primeiro número: ");
const segundoNumero = ask("Informe o segundo número: ");

if(primeiroNumero > segundoNumero) {
    console.log(`O maior número é ${primeiroNumero} e o menor número é ${segundoNumero}`);
} else {
    console.log(`O maior número é ${segundoNumero} e o menor número é ${primeiroNumero}`);
}