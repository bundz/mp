// Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
// Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.

const prompt = require("prompt-sync");
const ask = prompt();

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

const numero1 = ask("Informe um numero de 1 à 12: ");
const numero2 = ask("Informe outro numero de 1 à 12: ");

let soma = 0;

for (let i = 1; i <= array.length; i++) {
    if (i == (Number(numero1)-1)) {
        soma = soma + Number(array[i]);
    }

    if (i == (Number(numero2)-1)) {
        soma = soma + Number(array[i]);
    }

}

console.log(`A soma das posicoes ${numero1} e ${numero2} é: ${soma}`);