// Faça um programa que leia três números e mostre-os em ordem decrescente. 

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("1º número: ");
const segundoNumero = ask("2º número: ");
const terceiroNumero = ask("3º número: ");
const a = Number(primeiroNumero);
const b = Number(segundoNumero);
const c = Number(terceiroNumero);

if (a > b && a > c && b > c) {
    console.log(a,b,c);
}

if (a > b && a > c && c > b) {
    console.log(a,c,b);
}

if (b > a && b > c && a > c) {
    console.log(b,a,c);
}

if (b > a && b > c && c > a) {
    console.log(b,c,a);
}

if (c > a && c > b && a > b) {
    console.log(c,a,b);
}

if (c > a && c > b && b > a) {
    console.log(c,b,a);
}