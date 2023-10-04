//Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:
//a) A quantidade de pessoas em cada faixa etária;
//b) A percentagem de pessoas na primeira e na última faixa etária, com relação ao total de pessoas:
//Até 15 anos
//De 16 a 30 anos
//De 31 a 45 anos
//De 46 a 60 anos
//Acima de 60 anos

const prompt = require("prompt-sync");
const ask = prompt();

let ate15 = 0;
let ate30 = 0;
let ate45 = 0;
let ate60 = 0;
let mais60 = 0;

for (let i = 0; i < 15; i = i + 1) {
    const idade = ask('Me informe a tua idade: ');
    if (idade >= 0 && idade <= 15) {
        ate15 = ate15 + 1;
    }
    if (idade > 15 && idade <= 30) {
        ate30 = ate30 + 1;
    }
    if (idade > 30 && idade <= 45) {
        ate45 = ate45 + 1;
    }
    if (idade > 45 && idade <= 60) {
        ate60 = ate60 + 1;
    }
    if (idade > 60) {
        mais60 = mais60 + 1;
    }
    if (idade < 0) {
        console.log('Idade inválida');
    }
}

console.log(`A quantidade de pessoas de até 15 anos é: ${ate15} e a porcentagem é: ${(ate15/15)*100}%`);
console.log(`A quantidade de pessoas de 16 até 30 anos é: ${ate30} e a porcentagem é: ${(ate30/15)*100}%`);
console.log(`A quantidade de pessoas de 31 até 45 anos é: ${ate45} e a porcentagem é: ${(ate45/15)*100}%`);
console.log(`A quantidade de pessoas de 46 até 60 anos é: ${ate60} e a porcentagem é: ${(ate60/15)*100}%`);
console.log(`A quantidade de pessoas de mais de 60 anos é: ${mais60} e a porcentagem é: ${(mais60/15)*100}%`);