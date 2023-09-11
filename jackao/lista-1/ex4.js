//Faça um programa que verifique (usando if e else) se uma letra digitada é vogal ou consoante.  

const prompt = require("prompt-sync");
const ask = prompt();

const pergunta = ask("Digite uma letra: ");


if(pergunta == "a" || pergunta == "e" ||  pergunta == "i" || pergunta == "o" || pergunta == "u") {
    console.log("Essa letra é uma vogal");
} else {
    console.log("Essa letra é uma consoante");
}