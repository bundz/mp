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
const a = Number(salario);
let reajuste = 0;
const b = Number(reajuste);
let aumento = 0;
const c = Number(aumento);

if (a <= 280) {
    b = 0.2;
    c = a*b; 
}
if (a > 280 && a <= 699) {
    b = 0.15;
    c = a*b; 
}
if (a >= 700 && a <= 1499) {
    b = 0.10;
    c = a*b; 
}
if (a >= 1500) {
    b = 0.5;
    c = a*b; 
}

console.log(`a) O salário antes do reajuste é = ${a}`);
console.log(`b) O percentual do reajuste é = ${b}`);
console.log(`c) O valor do aumento é = ${c}`);
console.log(`d) O novo salário é = ${a+c}`);