//Faça um programa que receba a idade de dez pessoas e que calcule e
//mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const prompt = require("prompt-sync");
const ask = prompt();

let overAge = 0;
for(let i = 0; i <= 10; i++) {
    let idade = ask("Qual a sua idade: ");

    if(idade >= 18) {
        overAge = overAge + 1 
    }
}

console.log(`A quantidade de pessoas com a idade maior ou igual a 18 anos é ${overAge}`);