//Faça um programa que usando laços de repetição receba a idade e o peso de 15 pessoas. 
//Calcule e mostre as médias dos pesos das pessoas da mesma faixa etária. 
//As faixas etárias são: de 1 a 10 anos, de ll a 20 anos, de 21 a 30 anos e maiores de 31 anos.

const prompt = require("prompt-sync");
const ask = prompt();

let pessoas = 15;
let peso1a10 = 0;
let peso11a20 = 0;
let peso21a30 = 0;
let pesoMais31 = 0;


for (let i = 0; i < pessoas; i ++) {
    const idade = ask("Digite a tua idade: ");
    const peso = ask("Digite o teu peso: ");

    let pesoNum = Number(peso);

    if(idade >= 1 && idade <= 10) {
        peso1a10 = peso1a10 + pesoNum;
    }

    if(idade > 10 && idade < 21) {
        peso11a20 = peso11a20 + pesoNum;
    }

    if(idade >= 21 && idade < 31) {
        peso21a30 = peso21a30 + pesoNum;
    }

    if(idade >= 31) {
        pesoMais31 = pesoMais31 + pesoNum;
    }
}