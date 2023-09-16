// Faça um Programa que peça um número correspondente a um determinado ano e
// em seguida informe se este ano e ou não bissexto.

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Me diga um ano: ");
let ano = Number(numero);
const primeiroResto = ano % 4;
const segundoResto = ano % 100;
const terceiroResto = ano % 400;

if (primeiroResto == 0 && segundoResto != 0 || terceiroResto == 0) {
    console.log(`O ${ano} é ano bissexto.`);
} else {
    console.log(`O ${ano} não é ano bissexto.`);
}

