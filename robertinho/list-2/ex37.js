//Faça um programa que receba vários números e que calcule e mostre:

//A quantidade de números inferiores a 35;
//A média dos números positivos;
//A percentagem de números entre 50 e 100 entre todos os números digitados;
//A percentagem de números entre 10 e 20 entre os números menores que 50.

const prompt = require("prompt-sync");
const ask = prompt();

let numero = ask("Digite um numero: ");

let inf35 = 0;
let mediapositiva = 0;
let total = 0;
let entre50e100 = 0;
let entre10e20 = 0;
let menor50 = 0;

while (numero > 0) {
    if (numero < 35) {
        inf35 = inf35 + 1;
    }

    if (numero > 50 && numero < 100) {
        entre50e100 = entre50e100 + 1;
    }

    if (numero > 10 && numero < 20) {
        entre10e20 = entre10e20 + 1;
    }

    if (numero < 50) {
        menor50 = menor50 + 1;
    }

    mediapositiva = mediapositiva + Number(numero);
    total = total + 1;

    numero = ask("Digite um numero: ");
}

console.log(`Números inferiores à 35: ${inf35}`);
console.log(`A média dos números positivos é: ${mediapositiva/total}`);
console.log(`A percentagem de números entre 50 e 100 entre todos os números: ${(entre50e100/total)*100}%`);
console.log(`A percentagem de números entre 10 e 20 entre os números menores que 50: ${(entre10e20/menor50)*100}%`);