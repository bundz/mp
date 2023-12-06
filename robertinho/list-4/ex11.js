//Faça uma função que recebe a média final de um aluno por parãmetro e retorna o seu conceito, 
//conforme a tabela abaixo:
// Nota              Conceito
// de 0,0 a 4,9         D
// de 5,0 a 6,9	        C
// de 7,0 a 8,9	        B
// de 9,0 a 10,0	    A

const prompt = require("prompt-sync");
const ask = prompt();

const average = ask("Digite a média do aluno: ");

function concept (average) {
    if (average >= 0 && average < 5) {
        return 'D';
    }    if (average >= 5 && average < 7) {
        return 'C';
    }    if (average >= 7 && average < 9) {
        return 'B';
    }    if (average >= 9 && average <= 10) {
        return 'A';
    }
}

console.log(concept (average));