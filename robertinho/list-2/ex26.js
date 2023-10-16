//Faça um programa que usando laços de repetição receba a idade e o peso de 15 pessoas. 
//Calcule e mostre as médias dos pesos das pessoas da mesma faixa etária. 
//As faixas etárias são: de 1 a 10 anos, de ll a 20 anos, de 21 a 30 anos e maiores de 31 anos.

const prompt = require("prompt-sync");
const ask = prompt();

let pessoas = 5;
let peso1a10 = 0;
let peso11a20 = 0;
let peso21a30 = 0;
let pesoMais31 = 0;
let pessoas1a10 = 0;
let pessoas11a20 = 0;
let pessoas21a30 = 0;
let pessoasMais31 = 0;

for (let i = 0; i < pessoas; i ++) {
    const idade = ask("Digite a tua idade: ");
    const peso = ask("Digite o teu peso: ");

    let pesoNum = Number(peso);

    if(idade >= 1 && idade <= 10) {
        peso1a10 = peso1a10 + pesoNum;
        pessoas1a10 = pessoas1a10 + 1;
    }

    if(idade > 10 && idade < 21) {
        peso11a20 = peso11a20 + pesoNum;
        pessoas11a20 = pessoas11a20 + 1;
    }

    if(idade >= 21 && idade < 31) {
        peso21a30 = peso21a30 + pesoNum;
        pessoas21a30 = pessoas21a30 + 1;
    }

    if(idade >= 31) {
        pesoMais31 = pesoMais31 + pesoNum;
        pessoasMais31 = pessoasMais31 + 1;
    }
}

//FALTOU AGRUPAR A QUANTIDADE DE GENTE POR INTERVALO, PARA CONSEGUIR DIVIDIR CERTINHO NAS MEDIAS
console.log(`A media de pesos por intervalo é de: ${peso1a10/pessoas1a10} kg; ${peso11a20/pessoas11a20}kg; ${peso21a30/pessoas21a30}kg; ${pesoMais31/pessoasMais31}kg`)