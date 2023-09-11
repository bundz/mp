// Fácil 8- Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar
// , sabendo que a decisão é sempre o mais barato.  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroProduto = ask("Me diga o valor do primeiro produto: ");
const segundoProduto = ask("Agora me diga o valor do segundo produto: ");
const terceiroProduto = ask("e o valor do terceiro produto: ");

let primeirovalor = Number(primeiroProduto);
let segundovalor = Number(segundoProduto);
let terceirovalor = Number(terceiroProduto);

if(primeirovalor < segundovalor  && primeirovalor < terceirovalor ) {
    console.log("O Primeiro produto é o mais barato");
}

if(segundovalor < primeirovalor && segundovalor < terceirovalor) {
    console.log("O Segundo produto é o mais barato");
}

if(terceirovalor < primeirovalor && terceirovalor < segundovalor) {
    console.log("o Terceiro produto é o mais barato");
}