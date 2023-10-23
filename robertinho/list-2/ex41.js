//Faça um programa que receba a idade e a altura de várias pessoas e que calcule e 
//mostre a média das alturas das pessoas com mais de 50 anos. 
//Para encerrar a entrada de dados digite idade menor ou igual a zero.

const prompt = require("prompt-sync");
const ask = prompt();

let idade = ask("Informe a idade (anos): ");
let altura = ask("Informe a altura (cm): ");

let maiores50 = 0;
let somaAlturas = 0;

while (idade > 0) {
    tamanho = Number(altura);

    if (idade > 50) {
        maiores50 = maiores50 + 1;
        somaAlturas = somaAlturas + tamanho;
    }

    idade = ask("Informe a idade (anos): ");
    altura = ask("Informe a altura (cm): ");
}

console.log(`A média das alturas das pessoas com mais de 50 anos é: ${(somaAlturas/maiores50)} cm`);