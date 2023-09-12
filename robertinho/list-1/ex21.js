//  Um posto está vendendo combustíveis com a seguinte tabela de descontos:   

//Álcool:
// Até 20 litros: desconto de 3% por litro
// Acima de 20 litros: Desconto de 5% por litro.
// Valor do litro: R$2.52

//Gasolina:
// Até 20 litros: desconto de 4% por litro
// Acima de 20 litros, desconto de 6% por litro
// Valor do litro: R$5.87

//Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente. 

const prompt = require("prompt-sync");
const ask = prompt();

const combustivel = ask("Informe o tipo de combustivel desejado(A-Alcool / G-Gasolina): ");
const litros = ask("Digite quantos litros de combustivel voce gostaria de adquirir: ");

const Litros = Number(litros);
let alcool = 2.52;
let gasolina = 5.87;

if (combustivel == "A") {
    if (Litros <= 20) {
        desconto = alcool*0.03;
    }
    else {
        desconto = alcool*0.05;
    }
    totalPagar = ((alcool*Litros)-desconto);
}

if (combustivel == "G") {
    if (Litros <= 20) {
        desconto = gasolina*0.04;
    }
    else {
        desconto = gasolina*0.06;
    }
    totalPagar = ((gasolina*Litros)-desconto);
}

console.log(`O valor a ser pago e: ${totalPagar}`);