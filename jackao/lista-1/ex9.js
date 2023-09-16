//Faça um programa que leia três números e mostre-os em ordem decrescente.

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Me diga o primerio número: ");
const segundoNumero = ask("Me diga o segundo número: ");
const terceiroNumero = ask("Me diga o terceiro número: ");

let primeiroValor = Number(primeiroNumero);
let segundoValor = Number(segundoNumero);
let terceiroValor = Number(terceiroNumero);

let topNumber = 0;
let middleNumber = 0;
let bottomNumber = 0;

if(primeiroValor > segundoValor && primeiroValor > terceiroValor && segundoValor > terceiroValor) {
    topNumber = primeiroValor;


}

if(segundoValor > primeiroValor && segundoValor > terceiroValor && terceiroValor > segundoValor) {
    topNumber = segundoValor;


}
if(terceiroValor > primeiroValor && terceiroValor > segundoValor && primeiroValor > terceiroValor) {
    topNumber = terceiroValor;

}

if(primeiroValor < segundoValor && primeiroValor < terceiroValor) {
    bottomNumber = primeiroValor;
    
}

if(segundoValor < primeiroValor && segundoValor < terceiroValor) {
    bottomNumber = segundoValor;

}
if(terceiroValor < primeiroValor && terceiroValor < segundoValor) {
    bottomNumber = terceiroValor;

}

if(primeiroValor > segundoValor && primeiroValor < terceiroValor) {
    middleNumber = primeiroValor;

}

if(segundoValor > primeiroValor && segundoValor < terceiroValor) {
    middleNumber = segundoValor;

}

if(terceiroValor > primeiroValor && terceiroValor < segundoValor) {
    middleNumber = terceiroValor;

}

console.log(topNumber);
console.log(middleNumber);
console.log(bottomNumber);