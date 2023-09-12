// Fácil 25 – Escreva um programa que pergunte o raio de uma circunferência,
// e sem seguida mostre o diâmetro, comprimento e área da circunferência  

const prompt = require("prompt-sync");
const ask = prompt();

const raio = ask("Informe o valor do raio: ");
const valor = Number(raio);
const diametro = 2*valor;
const comprimento = 2*3.14*valor;
const area = 3.14*valor*valor;

console.log(`O diâmetro da circunferência é = ${diametro} cm`);
console.log(`O comprimento da circunferência é = ${comprimento} cm`);
console.log(`A área da circunferência é = ${area} cm`);