// Fácil20. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// “Telefonou para a vítima? “
// “Esteve no local do crime?”
// “Mora perto da vítima? “
// “Devia para a vítima? “
// “Já trabalhou com a vítima? “
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como “Suspeita”,
//  entre 3 e 4 como “Cúmplice” e 5 como “Assassino“. Caso contrário, ele será classificado como “Inocente“.  

const prompt = require("prompt-sync");
const ask = prompt();

const primeiraPergunta = ask("Você telefonou para a vítima? ");
const segundaPergunta = ask("Você esteve no local do crime? ");
const terceiraPergunta = ask("Você mora perto da vitima? ");
const quartaPergunta = ask("Você devia para a vítima? ");
const quintaPergunta = ask("Você ja trabalhou com a vítima? ");

let resposta = 0;

if (primeiraPergunta == "sim") {
    resposta = resposta +1
} else {
    resposta = resposta + 0
}

if (segundaPergunta == "sim") {
    resposta = resposta +1
} else {
    resposta = resposta + 0
}

if (terceiraPergunta == "sim") {
    resposta = resposta +1
} else {
    resposta = resposta + 0
}

if (quartaPergunta == "sim") {
    resposta = resposta +1
} else {
    resposta = resposta + 0
}

if (quintaPergunta == "sim") {
    resposta = resposta +1
} else {
    resposta = resposta + 0
}

if(resposta == 2) {
    console.log("Suspeito");
}
if(resposta == 3 || resposta == 4) {
    console.log("Cúmplice");
}
if(resposta == 5) {
    console.log("Assasino");
}
if(resposta == 1) {
    console.log("Inocente");
}