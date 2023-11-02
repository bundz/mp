//Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:
//a) A quantidade de pessoas em cada faixa etária;
//b) A percentagem de pessoas na primeira e na última faixa etária, 
// com relação ao total de pessoas:
//Até 15 anos
//De 16 a 30 anos
//De 31 a 45 anos
//De 46 a 60 anos
//Acima de 61 anos


const prompt = require("prompt-sync");
const ask = prompt();

let less15 = 0;
let entre16e30 = 0;
let entre31e45 = 0;
let entre46e60 = 0;
let maior61 = 0;

for(let i = 0; i <= 15; i++) {
    let idade = ask("Qual a sua idade: ");

    if(idade <= 15) {
        less15 = less15 + 1; 
    }

    if(idade > 15 && idade <= 30  ) {
        entre16e30 = entre16e30 + 1;
    }

    if(idade > 30 && idade <= 45) {
        entre31e45 = entre31e45 + 1; 
    }

    if(idade > 45 && idade <= 60) {
        entre46e60= entre46e60 + 1; 
    }

    if(idade >= 61) {
        maior61 = maior61 + 1; 
    }
}

console.log(`Até 15 anos: ${less15} (${less15 / 15 * 100}%)`);
console.log(`Entre 16 e 30 anos: ${entre16e30}`);
console.log(`Entre 31 e 45 anos: ${entre31e45}`);
console.log(`Entre 46 e 60 anos: ${entre46e60}`);
console.log(`Acima de 61 anos: ${maior61} (${maior61 / 15 * 100}%)`);

