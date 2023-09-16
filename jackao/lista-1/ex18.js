// Faça um Programa que peça um número inteiro e determine se ele e par ou ímpar. 
// Dica: utilize o operador módulo (resto da divisão).

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Me diga um número: ");

let valor = Number(numero);
let resto = valor % 2;

let par = "Par";
let impar = "Impar";

if(resto == 0)  {
    valor = par;
} else {
    valor=  impar;
}

console.log(valor);
