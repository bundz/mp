//Fácil 3- Faça um programa que verifique (usando if e else) se uma letra digitada é “F” ou “M”.
// Conforme a letra escrever: F – Feminino, M- Masculino, Sexo inválido.  

const prompt = require("prompt-sync");
const ask = prompt();

const sexo = ask("qual o seu sexo? ");

if(sexo == "M") {
    console.log("Sexo Masculino");
}

if( sexo == "F") {
    console.log("Sexo Feminino");
}

if(sexo != "M" && sexo != "F") {
    console.log("Sexo Invalido");
}



