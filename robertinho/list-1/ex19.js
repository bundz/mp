// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. 
// O resultado da operação deve ser acompanhado de uma frase que diga se o número e:
// Par ou ímpar;
// Positivo ou negativo;

const prompt = require("prompt-sync");
const ask = prompt();

const numeroUm = ask("Informe o primeiro número: ");
const numeroDois = ask("Informe o segundo número: ");
const operacao = ask("Qual operação você gostaria de realizar?R.: ");

const a = Number(numeroUm);
const b = Number(numeroDois);
let resultado = 0;

if (operacao == "soma" || operacao == "adição" || operacao == "+") {
    resultado = a+b;
    console.log(`O resultado é: ${resultado}`);
}

if (operacao == "subtrair" || operacao == "subratração" || operacao == "-") {
    resultado = a-b;
    console.log(`O resultado é: ${resultado}`);
}

if (operacao == "multiplicar" || operacao == "multiplicação" || operacao == "*") {
    resultado = a*b;
    console.log(`O resultado é: ${resultado}`);
}

if (operacao == "dividir" || operacao == "divisão" || operacao == "/") {
    resultado = a/b;
    console.log(`O resultado é: ${resultado}`);
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