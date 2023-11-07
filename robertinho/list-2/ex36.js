//Faça um programa que receba o tipo da ação, ou seja, uma letra a ser comercializada na bolsa de valores, 
//o preço de compra e o preço de venda de cada ação e que calcule e mostre:

//O lucro de cada ação comercializada;
//A quantidade de ações com lucro superior a R$ 1.000,00;
//A quantidade de ações com lucro inferior a R$ 200,00;
//O lucro total da empresa;
//Finalize com o tipo de ação “F”.

const prompt = require("prompt-sync");
const ask = prompt();

let tipo = ask("Informe qual o tipo de acao: ");
const acoes = [];
let lucroTotal = 0;
let maior1000 = 0;
let menor200 = 0;

while (tipo != 'F') {
    let compra = ask("Informe o preco de compra: ");
    let venda = ask("Informe o preco de venda: ");
    let acao = {};

    acao.tipo = tipo;
    acao.lucro = Number(venda) - Number(compra);

    acoes.push(acao);

    tipo = ask("Informe qual o tipo de acao: ");
}

for (const acao of acoes) {
    console.log(`O lucro da Ação ${acao.tipo} é: ${acao.lucro}`);

    if (acao.lucro > 1000) {
        maior1000 = maior1000 + 1;
    }

    if (acao.lucro < 200) {
        menor200 = menor200 + 1;
    }

    lucroTotal = lucroTotal + acao.lucro;
}

console.log(`A quantidade de ações com lucro superior a R$ 1.000,00: ${maior1000}`);
console.log(`A quantidade de ações com lucro infeior a R$ 200,00: ${menor200}`);
console.log(`Lucro Total da empresa: ${lucroTotal}`);

