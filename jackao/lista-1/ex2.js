//Fácil 2- Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

const prompt = require("prompt-sync");
const ask = prompt();

const valor = ask("Me diga um número: ");

if(valor >= 0) {
    console.log ("o valor é positivo");

} else {
    console.log ("o valor é negativo");

}