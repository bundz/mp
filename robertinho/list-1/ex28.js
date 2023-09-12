//Crie um programa que peça um número ao usuário e armazene ele na variável x. 
//Depois peça outro número e armazene na variável y. Mostre esses números. 
//Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.

const prompt = require("prompt-sync");
const ask = prompt();

let valorX = ask("Informe o valor de x: ");
let valorY = ask("Informe o valor de y: ");

let z = valorX;
valorX = valorY;
valorY = z;

console.log(`O valor de x e: ${valorX}`);
console.log(`O valor de y e: ${valorY}`);