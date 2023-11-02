//Escreva um aplicativo que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

const prompt = require("prompt-sync");
const ask = prompt();

const inteiro = ask ("Digite um numero: ");

const pares = [];
const impares = [];

if (inteiro <= 0) {
    console.log('Insira um inteiro valido');
}

if (inteiro > 0) {
for (let i = 0; i <= inteiro; i = i +1) {
    if (i % 2 == 0) {
        pares.push(i);
    }
    if (i % 2 != 0) {
        impares.push(i);
    }
}
    console.log(`Os números pares são: ${pares} | Os números ímpares são:  ${impares}`);
}
