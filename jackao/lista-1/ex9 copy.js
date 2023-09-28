// Faça um programa que leia três números e mostre-os em ordem decrescente. 

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("1º número: ");
const segundoNumero = ask("2º número: ");
const terceiroNumero = ask("3º número: ");
const numeroUm = Number(primeiroNumero);
const numeroDois = Number(segundoNumero);
const numeroTres = Number(terceiroNumero);

let top = numeroUm;
let mid= numeroDois;
let bot = numeroTres;

if (numeroDois < top && numeroDois < numeroTres) {
    top = numeroDois;
}

if (numeroTres < top && numeroTres < numeroDois) {
    top = numeroTres;
}

if (numeroUm > mid && numeroUm > numeroTres) {
    mid = numeroUm;
}

if (numeroTres < mid && numeroTres < numeroDois) {
    mid = numeroTres;
}

if (numeroUm > bot && numeroUm > numeroDois) {
    bot = numeroUm;
}

if (numeroDois > bot && numeroDois > numeroUm) {
    bot = numeroDois;
}

console.log(`Ordem Decrescente:(${bot};${mid};${top})`);