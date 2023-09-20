// Faça um programa que leia três números e mostre-os em ordem decrescente. 

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("1º número: ");
const segundoNumero = ask("2º número: ");
const terceiroNumero = ask("3º número: ");
const numeroUm = Number(primeiroNumero);
const numeroDois = Number(segundoNumero);
const numeroTres = Number(terceiroNumero);

let posicaoUm = numeroUm;
let posicaoDois = numeroDois;
let posicaoTres = numeroTres;

if (numeroDois < posicaoUm && numeroDois < numeroTres) {
    posicaoUm = numeroDois;
}

if (numeroTres < posicaoUm && numeroTres < numeroDois) {
    posicaoUm = numeroTres;
}

if (numeroUm > posicaoDois && numeroUm > numeroTres) {
    posicaoDois = numeroUm;
}

if (numeroTres < posicaoDois && numeroTres < numeroDois) {
    posicaoDois = numeroTres;
}

if (numeroUm > posicaoTres && numeroUm > numeroDois) {
    posicaoTres = numeroUm;
}

if (numeroDois > posicaoTres && numeroDois > numeroUm) {
    posicaoTres = numeroDois;
}

console.log(`Ordem Decrescente:(${posicaoTres};${posicaoDois};${posicaoUm})`);