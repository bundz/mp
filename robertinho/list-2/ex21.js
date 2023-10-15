// Faça um programa que receba a idade e o sexo de sete pessoas e que calcule e mostre:
//A idade média do grupo;
//A idade média das mulheres;
//A idade média dos homens;

const prompt = require("prompt-sync");
const ask = prompt();

let pessoas = 7;
let idadeGeral = 0;
let mediaGeral = Number(idadeGeral);
let idadeMulher = 0;
let mediaMulher = Number(idadeMulher);
let idadeHomem = 0;
let mediaHomem = Number(idadeHomem);
let totalMulheres = 0;
let totalHomens = 0;

for (let i = 0; i < pessoas; i ++) {
    const anoIdade = ask ("Informe a idade: ");
    const sexo = ask ("Informe o sexo (M - Masculino / F - Feminino): ");

    if (sexo != "M" && sexo != "F") {
        console.log(`Voce nao esta participando da pesquisa`);
    }

    let idade = Number(anoIdade);

    mediaGeral = mediaGeral + idade;

    if (sexo == "M") {
        mediaHomem = mediaHomem + idade;
        totalHomens = totalHomens + 1;
    }

    if (sexo == "F") {
        mediaMulher = mediaMulher + idade;
        totalMulheres = totalMulheres + 1;
    }
}

console.log(`A idade média do grupo: ${mediaGeral/pessoas} anos`);
console.log(`A idade média das mulheres: ${mediaMulher/totalMulheres} anos`);
console.log(`A idade média dos homens: ${mediaHomem/totalHomens} anos`);