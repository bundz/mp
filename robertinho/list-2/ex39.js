//Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:

//1, 2, 3, 4Votos para os respectivos candidatos5Voto nulo6Voto em branco

///Faça um programa que calcule e mostre:

    // O total de votos para cada candidato;
    // O total de votos nulos:
    // O total de votos em branco;
    // A percentagem de votos nulos sobre o total de votos;
    // A percentagem de votos em branco sobre o total de votos.

// Para finalizar o conjunto de votos, tem-se o valor zero. 

const prompt = require("prompt-sync");
const ask = prompt();

let voto = ask("Digite em quem você quer votar (1-2-3-4 (candidatos); 5 (nulo) ou 6 (em branco): ");

let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let nulos = 0;
let emBranco = 0;
let total = 0;

while (voto > 0) {
    if (voto == 1) {
        total1 = total1 + 1;
    }

    if (voto == 2) {
        total2 = total2 + 1;
    }

    if (voto == 3) {
        total3 = total3 + 1;
    }

    if (voto == 4) {
        total4 = total4 + 1;
    }

    if (voto == 5) {
        nulos = nulos + 1;
    }

    if (voto == 6) {
        emBranco = emBranco + 1;
    }

    total = total +1;

    voto = ask("Digite em quem você quer votar (1-2-3-4 (candidatos); 5 (nulo) ou 6 (em branco): ");
}

console.log(`O total de votos para cada candidato: 1 : ${total1} votos | 2: ${total2} votos | 3: ${total3} votos | 4: ${total4} votos`);
console.log(`O total de votos nulos: ${nulos}`);
console.log(`O total de votos em branco: ${emBranco}`);
console.log(`A percentagem de votos nulos sobre o total de votos: ${(nulos/total)*100}%`);
console.log(`A percentagem de votos em branco sobre o total de votos: ${(emBranco/total)*100}%`);