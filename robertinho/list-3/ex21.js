//Modifique o programa anterior para não aceitar a entrada do número zero, e requisitar a digitação de outro número neste caso.

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