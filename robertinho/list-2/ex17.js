//Faça um programa que receba a idade e o peso de sete pessoas. Calcule e mostre:
//A quantidade de pessoas com mais de 90 quilos;
//A média das idades das sete pessoas;

const prompt = require("prompt-sync");
const ask = prompt();


let peso90 = 0;
let idadeTotal = 0;
let idadeT = Number(idadeTotal);

for (let i = 0; i < 7; i ++) {
    const peso = ask ("Informe o seu peso em kg: ");
    const idade = ask ("Informe a sua idade: ");

    let idadeNum = Number(idade);

    idadeT = idadeT + idadeNum;
    
    if (peso > 90) {
        peso90 = peso90 + 1;
    }
}

console.log(`A quantidade de pessoas com mais de 90kg e: ${peso90}. A idade media e de: ${idadeT/7} anos.`);