//Escreva um programa que pergunte o raio de uma circunferência, e sem seguida 
// mostre o diâmetro, comprimento e área da circunferência.

const prompt = require("prompt-sync");
const ask = prompt();

const raio = ask("Informe o valor do raio(cm): ");
const a = Number(raio);
const diametro = 2*a;
const comprimento = 2*3.14*a;
const area = 3.14*a*a;

console.log(`O diâmetro da circunferência é = ${diametro} cm`);
console.log(`O comprimento da circunferência é = ${comprimento} cm`);
console.log(`A área da circunferência é = ${area} cm`);