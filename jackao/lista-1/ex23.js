// Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor.
//  Consegue criar mais de uma solução?  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroInteiro = ask("Me diga um número inteiro: ");
const segundoInteiro = ask("Me diga um segundo número inteiro: ");
const terceiroInteiro = ask("Me diga um terceiro número inteiro: ");

let primeiroNumero = Number(primeiroInteiro);
let segundoNumero = Number(segundoInteiro);
let terceiroNumero = Number(terceiroInteiro);

let numeroMaior = 0;
let numeroMenor = 0;

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    numeroMaior = primeiroNumero;
}

if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    numeroMaior = segundoNumero;
}

if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    numeroMaior = terceiroNumero;
}

if(primeiroNumero < segundoNumero && primeiroNumero < segundoNumero) {
    numeroMenor = primeiroNumero;
}

if(segundoNumero < primeiroNumero && segundoNumero < terceiroNumero) {
    numeroMenor = segundoNumero;
}

if (terceiroNumero < primeiroNumero && terceiroNumero < segundoNumero) {
    numeroMenor = terceiroNumero;
}

console.log (`O número maior é ${numeroMaior} e o numero menor é ${numeroMenor}`);



