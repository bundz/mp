//Faça um programa que receba várias idades e que calcule e mostre a média das idades digitadas. 
//Finalize digitando a idade igual a zero.

const prompt = require("prompt-sync");
const ask = prompt();

let total = 0;
let totalIdades = 0;
let idade = ask("Digite uma idade: ");

while (idade != 0) {
    let idades = Number(idade);

    totalIdades = totalIdades + idades; 
    total = total + 1;
    
    idade = ask("Digite uma idade: ");
}

console.log(`Media das idades = ${totalIdades/total}`);