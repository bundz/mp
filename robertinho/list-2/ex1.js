//Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

const prompt = require("prompt-sync");
const ask = prompt();

//LOOPS = FOR

const num = ask ("Digite um numero: ")

for (let mult = 1; mult <= 10; mult = mult + 1) {
    const result = num * mult;
    console.log(`${mult} * ${num} = ${result}`);
}