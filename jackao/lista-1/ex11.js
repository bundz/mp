// As organizações CSM resolveram dar um aumento de salário aos seus colaboradores 
// e lhe contrataram para desenvolver o programa que calculará os reajustes.

// a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o 
// seguinte critério, baseado no salário atual;
// b. Salários até R$ 280,00 (incluindo): aumento de 20%;
// c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
// d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
// e. Salários de R$ 1500,00 em diante: aumento de 5%
// Após o aumento ser realizado; informe na tela;

// a. O salário antes do reajuste;
// b. O percentual de aumento aplicado;
// c. O valor do aumento;
// d. O novo salário, após o aumento.

const prompt = require("prompt-sync");
const ask = prompt();

const pergunta = ask("Digite o seu salário: ");

const salario = Number(pergunta);
let reajuste = 0;
let aumento = 0;

if(salario <= 280) {
    reajuste = 0.2;
    aumento = salario * reajuste;
}

if(salario > 280 && salario <= 700) {
    reajuste = 0.15;
    aumento = salario * reajuste;
}

if(salario > 700 && salario <= 1500) {
    reajuste = 0.10;
    aumento = salario * reajuste;
}

if(salario >= 1500) {
    reajuste = 0.05;
    aumento = salario * reajuste;
}

console.log(`O salário é de ${salario}`);
console.log(`O percentual de aumento aplicado foi de ${(reajuste * 100)}%`);
console.log(`O valor do aumento foi de ${aumento}`);
console.log(`O valor do novo salário é ${(salario + aumento)}`);



