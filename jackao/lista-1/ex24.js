//Escreva um programa em C que recebe um inteiro e diga se é par ou ímpar. 
//Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if.  

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Informe um valor: ");
valor = Number(numero);
let resto = valor % 2;

if (resto == 0) {
    console.log(`${valor} é par!`);
} else {
    console.log(`${valor} é impar!`);
}