//Faça um programa que receba um conjunto de valores inteiros e positivos, com o intervalo formado pelo número imprima na tela todos os números primos existentes

const prompt = require("prompt-sync");
const ask = prompt();

const input = ask("Digite um numero: ");

const number = Number(input);

let isPrime = true;

if (number == 1) {
    isPrime = false;
}
for (let i = 2; i < number && isPrime == true ; i ++) {
    if (number % i == 0) {
        isPrime = false;
    }
}

if (isPrime) {
    console.log(`${number} e primo`);
}
if (!isPrime) {
    console.log(`${number} nao e primo`);
}