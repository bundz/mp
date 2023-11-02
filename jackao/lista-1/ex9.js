// Faça um programa que leia três números e mostre-os em ordem decrescente. 

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("1º número: ");
const segundoNumero = ask("2º número: ");
const terceiroNumero = ask("3º número: ");
const numeroUm = Number(primeiroNumero);
const numeroDois = Number(segundoNumero);
const numeroTres = Number(terceiroNumero);

let top = numeroTres;
let mid= numeroTres;
let bot = numeroTres;

if (numeroUm > numeroDois && numeroUm > numeroTres) {
    top = numeroUm;
}

if (numeroDois > numeroUm && numeroDois > numeroTres) {
    top = numeroDois;
}

if (numeroUm > numeroDois  && numeroUm < numeroTres || numeroUm < numeroDois && numeroUm > numeroTres) {
    mid = numeroUm;
}

if (numeroDois > numeroUm && numeroDois < numeroTres || numeroDois < numeroUm && numeroDois > numeroTres) {
    mid = numeroDois;
}

if (numeroUm < numeroDois && numeroUm < numeroTres) {
    bot = numeroUm;
}

if (numeroDois < numeroUm && numeroDois < numeroTres) {
    bot = numeroDois;
}

console.log(`Ordem Decrescente:(${top};${mid};${bot})`);