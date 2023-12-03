//Faça uma função que receba um valor inteiro e positivo e calcula o seu fatorial.

const prompt = require("prompt-sync");
const ask = prompt();

const number = ask("Digite um valor: ");

function fatorial(number) {
    if (number == 0 || number == 1) {
        return 1; 
    } 
    let resultado = 1;
        for (let i = 2; i <= number; i++) {
            resultado = resultado * i;
        }
    return resultado;
    }

    console.log(fatorial(number));