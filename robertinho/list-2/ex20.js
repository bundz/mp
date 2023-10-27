//Faça um programa que receba dez idades, pesos e Alturas e que calcule e mostre:
//A média das idades das dez pessoas;
//A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1,50;
//A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90;

const prompt = require("prompt-sync");
const ask = prompt();

let pessoas = 3;
let idadeTotal = 0;
let media = Number(idadeTotal);
let baixoEPesado = 0;
let entre10e30 = 0;


for (let i = 0; i < pessoas; i ++) {
    const idade = ask("Informe a idade (anos): ");
    const peso = ask("Informe o peso (kg): ");
    const altura = ask("Informe a altura (cm): ");

    let anos = Number(idade);
    media = media + anos;
    
    if (peso > 90 && altura < 150) {
        baixoEPesado = baixoEPesado + 1;
    }

    if (idade >= 10 && idade <= 30 && altura > 190) {
        entre10e30 = entre10e30 + 1;
    }

}

console.log(`A media de idades das pessoas e: ${media/pessoas} anos`);
console.log(`A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 150cm e: ${baixoEPesado}`);
console.log(`A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 190cm e: ${(entre10e30/pessoas)*100} %`);