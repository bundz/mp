//Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

const prompt = require("prompt-sync");
const ask = prompt();

const valor = ask("Me informe um valor: ");
let soma = 0;

for (let i = 1; i <= valor; i = i + 1) {
    soma = soma + 1/i;
}
console.log(`${soma}`);