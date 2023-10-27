//Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos e espaços em branco. 
//Seu programa deve funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.
//Para lado igual a 5:

const prompt = require("prompt-sync");
const ask = prompt();

const size = ask("Diga o tamanho do quadrado que voce deseja: ");

for (let i = 0; i < size; i = i + 1) {
    let row = "";
    for (let j = 0; j < size; j = j + 1) {
        let char = "  ";
        if (i == 0 || i == (size-1) || j == 0 || j == (size-1)) {
            char = "* ";
        }
        row = row + char;
    }
    console.log(row);
}