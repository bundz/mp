//Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida. 
//Em seguida, mostre-os em ordem crescente e decrescente.

const prompt = require("prompt-sync");
const ask = prompt();

const input1 = ask("Me diga um número: ");
const input2 = ask("Me diga um outro número: ");
const input3= ask("Me diga um último número: ");

const num1 = Number(input1);
const num2 = Number(input2);
const num3 = Number(input3);

let maiorNumero = num3;
let numeroMedial = num3;
let menorNumero = num3;

if(num1 >= num2 && num1 >= num3) {
    maiorNumero = num1;
}

if(num2 >= num1 && num2 >= num3) {
    maiorNumero = num2;
}

if(num1 >= num2 && num1 <= num3) {
    numeroMedial = num1;
}

if(num1 >= num3 && num1 <= num2) {
    numeroMedial = num1
}

if(num2 >= num1 && num2 <= num3) {
    numeroMedial = num2;
}

if(num2 >= num3 && num2 <= num1) {
    numeroMedial = num2;
}

if(num1 <= num2 && num1 <= num3) {
    menorNumero = num1
}

if(num2 <= num1 && num2 <= num3) {
    menorNumero = num2
}

console.log(`Os números em ordem de leitura são: ${num1}, ${num2} e ${num3}`);
console.log(`Os números em ordem crescente são: ${menorNumero}, ${numeroMedial} e ${maiorNumero}`);
console.log(`Os números em ordem decrescente são: ${maiorNumero}, ${numeroMedial} e ${menorNumero}`);
