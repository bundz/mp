//Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve 
//a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N 2 x N = 2N ... N x N = N2

const prompt = require("prompt-sync");
const ask = prompt();

const number = ask("Digite um valor: ");

function tabuada (number) {
    let value = 1;
    for (let i = 0; i < number; i ++) {
        value = value + i;
        return (`${value} x ${number} = ${value * number}`);
    }
}

//NÃO FICOU EM LOOP POR CONTA DO RETURN DENTRO DO LOOP?

console.log(tabuada(number));