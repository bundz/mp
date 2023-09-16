// Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo.
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. Dicas:
// Três lados formam um triangulo quando a soma de quaisquer dos dois lados é maior que o terceiro.
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroLado = ask("Me diga o primeiro lado: ");
const segundoLado = ask("Me diga o segundo lado");
const terceiroLado = ask("Me diga o terceiro lado");

let ladoUm = Number(primeiroLado);
let ladoDois = Number(segundoLado);
let ladoTres = Number(terceiroLado);

if ((ladoUm + ladoDois) > ladoTres && (ladoUm + ladoTres) > ladoDois && (ladoDois + ladoTres) > ladoUm) {
    console.log("Os valores formam um triângulo");
}

if(ladoUm == ladoDois && ladoUm == ladoTres && ladoDois == ladoTres) {
    console.log("Triângulo Equilátero");
}

if (ladoUm != ladoDois && ladoUm != ladoTres && ladoDois != ladoTres) {
    console.log("Triângulo Escaleno");
}

if (ladoUm == ladoDois && ladoDois != ladoTres || ladoUm == ladoTres && ladoTres != ladoDois || ladoDois == ladoTres && ladoDois != ladoUm) {
    console.log("Triângulo Isósceles");
}