//Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, 
//quando divididos por 11 produzam resto igual a 2.

const prompt = require("prompt-sync");
const ask = prompt();

//loop por todos os numeros de 1000 a 2000

for(let num = 1000; num <= 2000 ; num = num + 1) {
    //verificar se é a divisão por 11 produz resto igual a 2//
    const resto = num % 11;
    if (resto == 2) {
        console.log(num);
    }
    
}
