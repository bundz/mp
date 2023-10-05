//Faça um programa que receba a idade, altura e o peso de 25 pessoas, Calcule e mostre:
    //A quantidade de pessoas com idade superior a 50 anos;
    //A média das Alturas das pessoas com idade entre 10 e 20 anos
    //A porcentagem das pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.

const prompt = require("prompt-sync");
const ask = prompt();

let mais50 = 0;
let ate20 = 0;
let menor40 = 0;
let altura20 = 0;

for (let i = 1; i <= 25; i = i + 1) {
    const idade = ask('Informe a tua idade (anos): ');
    const altura = ask ('Informa tua altura (cm): ');
    const peso = ask ('Informe o teu peso (kg): ');
    if (idade > 50) {
        mais50 = mais50 + 1;
    }
    if (idade >= 10 & idade <= 20) {
        ate20 = ate20 + 1;
        altura20 = altura20 + altura;
    }
    if (peso < 40) {
        menor40 = menor40 + 1;
    }
}

console.log(`A quantidade de pessoas com mais de 50 anos e: ${mais50}`);
console.log(`A media de altura de pessoas entre 10 e 20 anos e: ${((altura20/ate20)*100)}cm`);
console.log(`A porcentagem de pessoas com menos de 40kg e: ${((menor40/25)*100)}%`);
