//Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar. 
//A função deve retornar um valor booleano.

const prompt = require("prompt-sync");
const ask = prompt();

const number = ask("Digite um número: ");

function isPositive (number) {
    if (number % 2 == 0) {
        return true
    }
    return false
}

console.log (isPositive(number));