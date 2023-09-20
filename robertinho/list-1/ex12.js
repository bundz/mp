//Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) 
//e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)
//O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
//a. Desconto do IR;
//b. Salário Bruto ate R$900,00 (inclusive) – Isento;
//c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
//d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
//e. Salário bruto acima de 2500 – Desconto de 20%.
//Imprima na tela as informações.

const prompt = require("prompt-sync");
const ask = prompt();

//Input de dados
const valorHoraInput = ask("Informe o valor da hora: ");
const horasTrabalhadasInput = ask("Informe quantidade de horas trabalhadas: ");

//Transformar para o tipo se necessário
const valorHora = Number(valorHoraInput);
const horasTrabalhadas = Number(horasTrabalhadasInput);

//Algoritmo
let salario = valorHora * horasTrabalhadas;
let inss = 0.10 * salario;
let fgts = 0.11 * salario;
let impostoRenda = 0;

if (salario > 900 && salario <= 1500) {
  impostoRenda = 0.05 * salario;
}
if (salario > 1500 && salario <= 2500) {
  impostoRenda = 0.1 * salario;
}
if (salario > 2500) {
  impostoRenda = 0.2 * salario;
}

let descontos = impostoRenda + inss;

console.log(`Salário Bruto = ${salario}`);
console.log(`Importo de Renda = ${impostoRenda}`);
console.log(`INSS = ${inss}`);
console.log(`FGTS = ${fgts}`);
console.log(`Total de Descontos = ${descontos}`);
console.log(`Salário Líquido = ${salario - descontos}`);