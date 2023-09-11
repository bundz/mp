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
let inss = 0.03 * salario;
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