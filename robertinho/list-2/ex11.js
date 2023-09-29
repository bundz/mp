//Escreva um aplicativo que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

const prompt = require("prompt-sync");
const ask = prompt();

const inteiro = ask ("Digite um numero: ");

for (let i = 0; i <= inteiro; i = i +1) {
    if (i % 2 == 0) {
        console.log(`Par: ${i}`);
    }
}

for (let i = 0; i <= inteiro; i = i +1) {
    if (i % 2 != 0) {
        console.log(`Impar: ${i}`);
    }
}

if (inteiro == 0) {
    console.log('Insira um inteiro valido');
}