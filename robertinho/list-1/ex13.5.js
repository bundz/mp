//Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido);

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Diga em qual dia de Setembro/23 estamos: ");

if (numero == 1 || numero == 8 || numero == 15 || numero == 22 || numero == 29) {
    console.log("Boa Sexta-feira");
}

if (numero == 2 || numero == 9 || numero == 16 || numero == 23 || numero == 30) {
    console.log("Bom Sábado");
}

if (numero == 3 || numero == 10 || numero == 17 || numero == 24) {
    console.log("Bom domingo");
}

if (numero == 4 || numero == 11 || numero == 18 || numero == 25) {
    console.log("Boa Segunda-feira");
}

if (numero == 5 || numero == 12 || numero == 19 || numero == 26) {
    console.log("Boa Terça-feira");
}

if (numero == 6 || numero == 13 || numero == 20 || numero == 27) {
    console.log("Boa Quarta-feira");
}

if (numero == 7 || numero == 14 || numero == 21 || numero == 28) {
    console.log("Boa Quinta-feira");
}

if (numero >= 31) {
    console.log("Número ultrapassou o limite de dias do mês");
}