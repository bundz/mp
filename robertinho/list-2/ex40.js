//Faça um programa que receba como entrada uma lista de números positivos ou negativos, terminada com o número zero. 
//O programa deve usar laços de repetição para produzir como saída a soma dos números positivos, 
//a soma dos números negativos e a soma das duas somas parciais.

const prompt = require("prompt-sync");
const ask = prompt();

let totalPositivos = 0;
let totalNegativos = 0;

let numero = ask("Digite um numero: ");

while (numero != 0) {
    let valor = Number(numero);
    if (numero > 0) {
        totalPositivos = totalPositivos + valor;
    }
    if (numero < 0) {
        totalNegativos = totalNegativos + valor;
    }

    numero = ask("Digite um numero: ");
}

console.log(`A soma dos numeros positivos é: ${totalPositivos}`);
console.log(`A soma dos numeros negativos é: ${totalNegativos}`);
console.log(`A soma das duas somas parciais é: ${totalNegativos+totalPositivos}`);
