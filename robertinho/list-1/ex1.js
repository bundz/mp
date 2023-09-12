//PROGRAMA PEDE DOIS NÚMEROS E COM IF/ELSE DIZER QUAL O MAIOR

const prompt = require("prompt-sync");
const ask = prompt();

const primeiroNumero = ask("Qual o primeiro Número: ");
const segundoNumero = ask("Qual o segundo Número: ");
const a = Number(primeiroNumero);
const b = Number(segundoNumero);

if (a > b) {
    console.log(`O maior número é: ${a}`);
} else {
    console.log(`O maior número é: ${b}`);
}