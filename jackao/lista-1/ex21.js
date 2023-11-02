// Um posto está vendendo combustíveis com a seguinte tabela de descontos: Álcool:

// Até 20 litros: desconto de 3% por litro
// Acima de 20 litros: Desconto de 5% por litro 99.
// Gasolina:

// Até 20 litros: desconto de 4% por litro
// Acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos, 
// o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), 
// calcule e imprima o valor a ser pago pelo cliente.

const prompt = require("prompt-sync");
const ask = prompt();

const combustivel = ask("Qual o tipo de combustível? ");
const litros = ask("Digite quantos litros voce gostaria: ");

const Litros = Number(litros);
let alcool = 2.52;
let gasolina = 5.87;
let litrosAbastecidos = 0;
let totalPagar = 0;

if (combustivel == "A") {
    if (Litros == 0) {
        console.log(`Insira um valor de litros.`);
    } else {
        if (Litros > 0 && Litros <= 20) {
            litrosAbastecidos = (alcool*Litros);
            desconto = (litrosAbastecidos*0.03);
        }
        else {
            litrosAbastecidos = (alcool*Litros);
            desconto = (litrosAbastecidos*0.05);
        }
        totalPagar = (litrosAbastecidos-desconto);
    }
}

if (combustivel == "G") {
    if (Litros == 0) {
        console.log(`Insira um valor de litros.`);
    } else {
        if (Litros > 0 && Litros <= 20) {
            litrosAbastecidos = (gasolina*Litros);
            desconto = (litrosAbastecidos*0.04);
        }
        else {
            litrosAbastecidos = (gasolina*Litros);
            desconto = litrosAbastecidos*0.06;
        }
        totalPagar = (litrosAbastecidos-desconto);
    }

}

console.log(`O valor total é: ${totalPagar}`);