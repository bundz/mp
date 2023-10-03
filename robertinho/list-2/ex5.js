// Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida. Em seguida, mostre-os em ordem crescente e decrescente.

const prompt = require("prompt-sync");
const ask = prompt();

const valorUm = ask("Me informe o primeiro valor: ");
const valorDois = ask("Me informe o segundo valor: ");
const valorTres = ask("Me informe o Terceiro valor: ");
let numeroUm = Number(valorUm);
let numeroDois = Number(valorDois);
let numeroTres = Number(valorTres);

let primeiroNumero = numeroUm;
let segundoNumero = numeroUm;
let terceiroNumero = numeroUm;

if(numeroDois >= numeroUm && numeroDois >= numeroTres) {
    primeiroNumero = numeroDois;
}

if(numeroTres >= numeroUm && numeroTres >= numeroDois) {
    primeiroNumero = numeroTres;
}

if(numeroDois >= numeroTres && numeroDois <= numeroUm) {
    segundoNumero = numeroDois;
}

if(numeroDois >= numeroUm && numeroDois <= numeroTres) {
    segundoNumero = numeroDois;
}

if(numeroTres >= numeroUm && numeroTres <= numeroDois) {
    segundoNumero = numeroTres;
}

if(numeroTres >= numeroDois && numeroTres <= numeroUm) {
    segundoNumero = numeroTres;
}

if(numeroDois <= numeroUm && numeroDois <= numeroTres) {
    terceiroNumero = numeroDois;
}

if(numeroTres <= numeroUm && numeroTres <= numeroDois) {
    terceiroNumero = numeroTres;
}

console.log(`Valores inseridos: ${numeroUm},${numeroDois},${numeroTres}`);
console.log(`Ordem Decrescente: ${primeiroNumero},${segundoNumero},${terceiroNumero}`);
console.log(`Ordem Crescente: ${terceiroNumero},${segundoNumero},${primeiroNumero}`);