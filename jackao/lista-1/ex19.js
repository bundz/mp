// Fácil19. Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
// O resultado da operação deve ser acompanhado de uma frase que diga se o número e:
// Par ou ímpar;
// Positivo ou negativo;

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("me diga um número: ");
const segundoNumero = ask("me diga um segundo número: ");
const operacao = ask("Qual operação você deseja realizar? ")

let primeiroValor = Number(primeiroNumero);
let segundoValor = Number(segundoNumero);
let resultado = 0;

if(operacao == "soma") {
    resultado = primeiroValor + segundoValor;
    console.log (`O resultado da soma é ${resultado}`);
}
if(operacao == "subtracao") {
    resultado = primeiroValor - segundoValor;
    console.log (`O resultado da subtração é ${resultado}`);
}
if(operacao == "multiplicacao") {
    resultado = primeiroValor * segundoValor;
    console.log (`O resultado da multiplicação é ${resultado}`);
}
if(operacao == "divisao") {
    resultado = primeiroValor / segundoValor;
    console.log (`O resultado da divisão é ${resultado}`);
}

let resto = resultado % 2;

if (resto == 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

if (resultado > 0) {
    console.log(`O ${resultado} é positivo`);
}
if (resultado < 0) {
    console.log(`O ${resultado} é negativo`);
}

