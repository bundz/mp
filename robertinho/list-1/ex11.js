// As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
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

const salario = ask("Informe o teu salário: ");
const Salario = Number(salario);
let reajuste = 0;
let aumento = 0;

if (Salario <= 280) {
    reajuste = 0.2;
    aumento = Salario*reajuste; 
}
if (Salario > 280 && Salario <= 699) {
    reajuste = 0.15;
    aumento = Salario*reajuste; 
}
if (Salario >= 700 && Salario <= 1499) {
    reajuste = 0.1;
    aumento = Salario*reajuste; 
}
if (Salario >= 1500) {
    reajuste = 0.05;
    aumento = Salario*reajuste; 
}

console.log(`a) O salário antes do reajuste é = ${Salario}`);
console.log(`b) O percentual do reajuste é = ${reajuste*100}%`);
console.log(`c) O valor do aumento é = ${aumento}`);
console.log(`d) O novo salário é = ${Salario+aumento}`);