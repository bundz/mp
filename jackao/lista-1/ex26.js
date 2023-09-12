// Fácil 26- Para doar sangue é necessário ter entre 18 e 67 anos.
//  Faça um aplicativo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não.
//  Use alguns dos operadores lógicos OU (||) e E (&&).  

const prompt = require("prompt-sync");
const ask = prompt();

const idade = ask("Diga a sua idade e verificarei se você pode doar sangue: ");

if(idade >= 18 && idade <= 67) {
    console.log ("Você está ápto a doar sangue");
} else {
    console.log ("Você não está ápto a doar snague");
}

