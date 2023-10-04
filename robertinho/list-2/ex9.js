//Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const prompt = require("prompt-sync");
const ask = prompt();

let maiorIdade = '';
let total = Number(maiorIdade);

for (let i = 0; i < 10 ; i = i + 1) {
    const idade = ask('Digite a sua idade: ');
    if (idade >= 18) {
        total = total + 1;
    }
}
console.log(`A quantidade de pessoas com 18 anos ou mais e: ${total}`);