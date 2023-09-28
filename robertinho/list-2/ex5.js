// Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida. Em seguida, mostre-os em ordem crescente e decrescente.

const prompt = require("prompt-sync");
const ask = prompt();

const valorUm = ask("Me informe o primeiro valor: ");
const valorDois = ask("Me informe o segundo valor: ");
const valorTres = ask("Me informe o Terceiro valor: ");
let numeroUm = Number(valorUm);
let numeroDois = Number(valorDois);
let numeroTres = Number(valorTres);

console.log(`Valores inseridos: ${numeroUm},${numeroDois},${numeroTres}`);

//Preciso criar 3 whiles? ideia inicial: 1 while com if do primeiro ser maior que todos e ocupar a posicao 1,
//caso contrario arrumar posicao (2 ou 3), depois para o segundo ser maior e por ultimo o terceiro ser maior.