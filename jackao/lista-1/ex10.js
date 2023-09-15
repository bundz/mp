//Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. 
//Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso.

const prompt = require("prompt-sync");
const ask = prompt();

const turno = ask("Em qual turno você estuda (Matutino,Vespertino,Noturno)? ");


if (turno == "M") {
    console.log("Bom dia!");
}

if (turno == "V") {
    console.log("Boa tarde!");
}

if (turno == "N") {
    console.log("Boa noite!");
}