//Uma empresa deseja aumentar seus preços em 20%. Faça um programa que leia o código e o preço de custo de cada produto e que calcule o novo preço. 
//Calcule também a média dos preços com e sem aumento. Mostre o código e o novo preço de cada produto e, no final, as médias. 
//A entrada de dados deve terminar quando for lido um código de produto negativo. 

const prompt = require("prompt-sync");
const ask = prompt();

let codigo = ask("Informe o codigo do produto: ");
let preco = ask("Informe o valor do produto: ");


let semAumento = 0;
let comAumento = 0;
let totalProdutos = 0;
let valorNovo;

while (codigo > 0) {
    let valor = Number(preco);
    valorNovo = valor * 1.2;
    semAumento = semAumento + valor;
    comAumento = comAumento + valorNovo;
    totalProdutos = totalProdutos + 1;

    console.log(`O código do produto é: ${codigo} | O novo valor é: ${(valorNovo)}`);

    codigo = ask("Informe o codigo do produto: ");
    preco = ask("Informe o valor do produto: ");
}

console.log(`A média de valores sem aumento é: ${semAumento/totalProdutos} | A média de valores com aumento é: ${comAumento/totalProdutos}`);