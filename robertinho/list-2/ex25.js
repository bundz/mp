//Faça um programa para calcular n! (Fatorial de n), sendo que o valor inteiro de n é fornecido pelo usuário. 
//Sabe-se que: N! = 1 * 2 * 3 * … (n – 1) * n 0! = 1, por definição;

const prompt = require("prompt-sync");
const ask = prompt();

const input = ask("Digite um numero: ");
let fatorial = 1;

for (let i = 1; i <= input; i ++) {
    fatorial = fatorial * i;
}

console.log(fatorial);