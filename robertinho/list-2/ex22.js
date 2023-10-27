//Faça um programa que receba o valor de um carro e mostre uma tabela com os seguintes dados: preço final, quantidade de parcelas e valor da parcela. 
//Considere o seguinte:

//O preço final para compra à vista tem um desconto de 20%;
//A quantidades de parcelas pode ser: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60.
//Os percentuais de acréscimo seguem a tabela a seguir.


const prompt = require("prompt-sync");
const ask = prompt();

const valor = ask("Qual o valor do carro? ");

let parcelas = [1, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
let acrescimos = [0, 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.30];

console.log(`| VALOR FINAL | QUANTIDADE DE PARCELAS | VALOR DA PARCELA |`); 

for ( let i = 0; i < parcelas.length; i ++) {
    let parcela = parcelas[i];
    let acrescimo = acrescimos[i];
    
    let valorFinal = Number(valor) + Number(valor)*acrescimo;
    if (parcela == 1) {
        valorFinal = Number(valor) - Number(valor)*0.2;
    }

    let valorParcela = valorFinal / parcela;

    console.log(`|${valorFinal} | ${parcela} | ${valorParcela}|`);
}

