// Fácil 1- Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Me diga um número: ");
const segundoNumero = ask("Agora me diga outro: ");

const a = Number(primeiroNumero);
const b = Number(segundoNumero);


if(a > b) {
    console.log (`o número maior é ${a}`);
} else {
    console.log (`o número maior é ${b}`);
}