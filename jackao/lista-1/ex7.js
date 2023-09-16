// Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;


const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Me diga o priemiro número: ");
const segundoNumero = ask("Me diga o segundo número: ");
const terceiroNumero = ask("Me diga o terceiro número: ");

let primeiroValor = Number(primeiroNumero);
let segundoValor = Number(segundoNumero);
let terceiroValor = Number(terceiroNumero);

let maiorNumero = 0;
let menorNumero = 0;

if(primeiroValor > segundoValor && primeiroValor > terceiroValor) {
    maiorNumero = primeiroValor;

}

if(segundoValor > primeiroValor && segundoValor > terceiroValor) {
    maiorNumero = segundoValor;


}
if(terceiroValor > primeiroValor && terceiroValor > segundoValor) {
    maiorNumero = terceiroValor;

}

if(primeiroValor < segundoValor && primeiroValor < terceiroValor) {
    menorNumero = primeiroValor;
    
}

if(segundoValor < primeiroValor && segundoValor < terceiroValor) {
    menorNumero = segundoValor;

}
if(terceiroValor < primeiroValor && terceiroValor < segundoValor) {
    menorNumero = terceiroValor;
}

console.log(`O maior número é o ${maiorNumero}`);
console.log(`O menor número é o ${menorNumero}`);

