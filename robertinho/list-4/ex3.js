//Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o 
//valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.

const prompt = require("prompt-sync");
const ask = prompt();

function isPrime (number) {
    for (let divisor = 2; divisor < number; divisor ++) {
        if (number % divisor == 0) return false;
    }
    return true

}

const numero = ask("Informe um numero: ");

const number = Number(numero);

console.log(isPrime(number));