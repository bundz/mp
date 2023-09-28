//Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.
const prompt = require("prompt-sync");
const ask = prompt();

const num = ask("Digite um numero: ");

for (let i=1; i<=10; i = i + 1) {
    for(let mult=1; mult <=10; mult = mult +1) {
        const result = i * mult;
    
        console.log(`${i} * ${mult} = ${result}`);
    }
}