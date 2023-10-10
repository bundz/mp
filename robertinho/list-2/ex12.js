//Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos. 
//Seu programa deve usar laços de repetição e funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.
//Por exemplo, para lado igual a 5:
// ****
// \***
// \***
// \***
// \****

const prompt = require("prompt-sync");
const ask = prompt();

const size = ask("Diga o tamanho do quadrado que voce deseja: ");

for (let i = 1; i <= size && size != 0 && size <= 20; i = i + 1) {
    let row = "";
    for (let j = 1; j <= size && size != 0 && size <= 20; j = j + 1){
        row = row + ".";
    }
    console.log(row);
}