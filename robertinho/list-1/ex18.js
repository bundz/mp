//Faça um Programa que peça um número inteiro e determine se ele e par ou ímpar. 
//Dica: utilize o operador módulo (resto da divisão).  

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