// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:

// “Telefonou para a vítima? “
// “Esteve no local do crime?”
// “Mora perto da vítima? “
// “Devia para a vítima? “
// “Já trabalhou com a vítima? “

//O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
//Se a pessoa responder positivamente a 2 questões ela deve ser classificada como “Suspeita”, entre 3 e 4 como “Cúmplice” e 5 como “Assassino“. 
//Caso contrário, ele será classificado como “Inocente“.

const prompt = require("prompt-sync");
const ask = prompt();

const introducao = ask("Começaremos fazendo umas perguntas de sim ou não, você está pronto? ");
if(introducao == "nao") {
    console.log("Você não tem escolha");
}
const introducaoDois = ask("Começaremos fazendo umas perguntas de sim ou não, você está pronto? ");
const perguntaUm = ask("Telefonou para a vítima? ");
const perguntaDois = ask("Esteve no local do crime? ");
const perguntaTres = ask("Mora perto da vítima? ");
const perguntaQuatro = ask("Devia para a vítima? ");
const perguntaCinco = ask("Já trabalhou com a vítima? ");
let resposta = 0;

if(perguntaUm == "sim") {
    resposta = resposta + 1;
} else {
    resposta = resposta;
}
if (perguntaDois == "sim") {
    resposta = resposta + 1;
} else {
    resposta = resposta;
}
if(perguntaTres == "sim") {
    resposta = resposta + 1;
} else {
    resposta = resposta;
}
if (perguntaQuatro == "sim") {
    resposta = resposta + 1;
} else {
    resposta = resposta;
}
if(perguntaCinco == "sim") {
    resposta = resposta + 1;
} else {
    resposta = resposta;
}

console.log(`${resposta}`);

if(resposta == 2) {
    console.log("Suspeito");
}
if(resposta == 3 || resposta == 4) {
    console.log("Cúmplice");
}
if(resposta == 5) {
    console.log("Assasino");
}
if(resposta < 2) {
    console.log("Inocente");
}