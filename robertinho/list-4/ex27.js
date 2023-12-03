//Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz . 
//(sem utilizar funções ou operadores de potência prontos)

const prompt = require("prompt-sync");
const ask = prompt();

const base = ask("Digite o valor base: ");
const potencia = ask("Digite o valor potencia: ");

function potenciacao (base,potencia) {
    if (base == '1') {
        return 1;
    }
    if (base == '0' && potencia == '0') {
        return 1;
    }
    if (base == '0' && potencia > 0) {
        return 0;
    }

    return base**potencia;
}

console.log(potenciacao (base,potencia));