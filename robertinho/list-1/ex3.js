//PROGRAMA QUE VERIFIQUE O SEXO DA PESSOA COM IF/ELSE - FEMININO, MASCULINO E INVÁLIDO

const prompt = require("prompt-sync");
const ask = prompt();

const sexo = ask("Por favor informe o seu sexo (F,M): ");

if (sexo == "F") {
    console.log(`Seu sexo é feminino`);
} 
if (sexo == "M") {
    console.log(`Seu sexo é masculino`);
} 
if (sexo != "F" && sexo != "M") {
    console.log(`Sexo inválido`);
}