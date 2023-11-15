//Crie um programa que armazene 10 números digitados pelo usuário em dois vetores: um somente para números pares, e outro somente para números ímpares. 
//Após, exiba os valores dos dois vetores na tela, em sequência. 
//Obs.: As posições que não receberem valores exibirão o número zero. Não se preocupe com isso por enquanto.

const prompt = require("prompt-sync");
const ask = prompt();

const vetorPar = [];
const vetorImpar = [];

for (let i = 0; i < 10; i ++) {
    let valor = ask("Informe um valor: ");

    if (Number(valor) % 2 == 0) {
        vetorPar.push(Number(valor));
    }

    if (Number(valor) % 2 != 0) {
        vetorImpar.push(Number(valor));
    }

}

console.log(`Vetor Par: ${vetorPar} | Vetor Impar: ${vetorImpar}`);