/* Fácil13 – Faça um Programa que leia um número e exiba o dia correspondente da semana.
 (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido) */

const prompt = require("prompt-sync");
const ask = prompt();

const weekDay = ask('Digite um dia da semana: ');

if (weekDay == 1) {
    console.log("Domingo");
}

if (weekDay == 2) {
    console.log("Segunda-feira");
}

if (weekDay == 3) {
    console.log("Terça-feira");
}

if (weekDay == 4) {
    console.log("Quarta-feira");
}

if (weekDay == 5) {
    console.log("Quinta-feira");
}

if (weekDay == 6) {
    console.log("Sexta-feira");
}

if (weekDay == 7) {
    console.log("Sábado");
}

if (weekday > 7) { console.log("Valor Inválido")
}

