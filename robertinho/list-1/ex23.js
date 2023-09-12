//Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. 
//Consegue criar mais de uma solução?

const prompt = require("prompt-sync");
const ask = prompt();

const a = ask("Informe o primeiro número: ");
const b = ask("Informe o segundo número: ");
const c = ask("Informe o terceiro número: ");
let maior = 0;
let menor = 0;

if (a > b && a > c) {
    maior = a;
}

if (a < b && a < c) {
    menor = a;
}

if (b > a && b > c) {
    maior = b;
}

if (b < a && b < c) {
    menor = b;
}

if (c > a && c > b) {
    maior = c;
}

if (c < a && c < b) {
    menor = c;
}

console.log(`O maior número é ${maior} e o menor número é ${menor}`);