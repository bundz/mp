//Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido);

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Diga um número: ");

if (numero == 1) {
    console.log("O primeiro dia da Semana é Domingo");
}

if (numero == 2) {
    console.log("O segundo dia da Semana é Segunda-feira");
}

if (numero == 3) {
    console.log("O terceiro dia da Semana é Terça-feira");
}

if (numero == 4) {
    console.log("O quarto dia da Semana é Quarta-feira");
}

if (numero == 5) {
    console.log("O quinto dia da Semana é Quinta-feira");
}

if (numero == 6) {
    console.log("O sexto dia da Semana é Sexta-feira");
}

if (numero == 7) {
    console.log("O sétimo dia da Semana é Sábado");
}

if (numero > 7) {
    console.log("Número Inválido");
}