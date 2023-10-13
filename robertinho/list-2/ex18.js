//Faça um programa que receba a idade, o peso, a altura, a cor dos olhos (A – Azul, P- Preto, V- Verde e C- Castanho) 
//e a cor dos cabelos (P – Preto, C- Castanho, L – Louro e R-Ruivo) de 20 pessoas e que calcule e mostre: 
//A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos;
//A média das idades das pessoas com altura inferior a 1,50;
//A porcentagem de pessoas com olhos azuis entre as pessoas analisadas;
//A quantidade de pessoas ruivas que não possuem olhos azuis;

const prompt = require("prompt-sync");
const ask = prompt();

let pessoas = 5;
let mais50menos60 = 0;
let mediaidades = 0;
let olhosazuis = 0;
let ruivosnaoazuis = 0;
let idademenos150 = 0;
let idadepequenos = Number(idademenos150);

for (let i = 0; i < pessoas; i ++) {
    const idade = ask("Informe a tua idade (anos): ");
    const peso = ask("Informe o teu peso (kg): ");
    const altura = ask("Informe a tua altura (cm): ");
    const olhos = ask("Informe a cor dos teus olhos (A - Azul, P - Preto, V - Verde e C - Castanho): ");
    const cabelo = ask("Informe a cor do teu cabelo (P - Preto, C- Castanho, L - Louro e R-Ruivo): ");

    if (idade > 50 || peso < 60) {
        mais50menos60 = mais50menos60 + 1;
    }

    if (altura < 150) {
        idadepequenos = idadepequenos + idade;
        mediaidades = mediaidades + 1; 
    }

    if (olhos == "A") {
        olhosazuis = olhosazuis + 1;
    }

    if (cabelo == "R" && olhos != "A") {
        ruivosnaoazuis = ruivosnaoazuis + 1;
    }
}

console.log(`A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos: ${mais50menos60}`);
console.log(`A média das idades das pessoas com altura inferior a 1,50: ${(idadepequenos/mediaidades)} anos`);
console.log(`A porcentagem de pessoas com olhos azuis entre as pessoas analisadas: ${(olhosazuis/pessoas)*100}%`);
console.log(`A quantidade de pessoas ruivas que não possuem olhos azuis: ${ruivosnaoazuis}`);
