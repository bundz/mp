//Escreva um programa em C que recebe um inteiro e diga se é par ou ímpar. 
//Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if.  

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Informe um valor: ");
a = Number(numero);
let resto = a % 2;

if (resto == 0) {
    console.log(`${a} é par!`);
} else {
    console.log(`${a} é impar!`);
}