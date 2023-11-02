//Escreva um aplicativo que recebe inteiro e mostra os números pares e ímpares (separados),
//de 1 até esse inteiro.

const prompt = require("prompt-sync");
const ask = prompt();

const inteiro = ask("Escreva um número: ");

const pares = [];
const impares = [];

for(let i = 0; i < inteiro; i++) {
    if(i % 2 == 0) {
        pares.push(i);
    } else {
        impares.push(i);
    }
}

console.log(`Os números pares são: ${pares} | Os números impares são: ${impares}`);