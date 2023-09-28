// Faça um programa que leia três números, verifique (usando if e else), e mostre o maior deles.

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Me diga o priemiro número: ");
const segundoNumero = ask("Me diga o segundo número: ");
const terceiroNumero = ask("Me diga o terceiro número: ");

let primeiroValor = Number(primeiroNumero);
let segundoValor = Number(segundoNumero);
let terceiroValor = Number(terceiroNumero);

if(primeiroValor > segundoValor && primeiroValor > terceiroValor) {
    console.log(`O ${primeiroValor} é o maior!`);

}

if(segundoValor > primeiroValor && segundoValor > terceiroValor) {
    console.log(`O ${segundoValor} é o maior!`);


}
if(terceiroValor > primeiroValor && terceiroValor > segundoValor) {
    console.log(`O ${terceiroValor} é o maior!`);

}

if(primeiroValor == segundoValor && primeiroValor == terceiroValor && segundoValor == terceiroValor) {
    console.log(`O ${primeiroValor} é igual em amos os três!`);
}

