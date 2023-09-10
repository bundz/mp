//PROGRAMA PEDE UM NÚMERO E INFORMA SE É POSITIVO OU NEGATIVO

const prompt = require("prompt-sync");
const ask = prompt();

const numero = ask("Digite um número: ");
const a = Number(numero);

if (a > 0) {
    console.log(`${a} é um número positivo`);
} else {
    console.log(`${a} é um número negativo`);
}