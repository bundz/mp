// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. 
//A atribuição de conceitos obedece à tabela abaixo:  

//Média de aproveitamento        Conceito 
//Entre 9.0 e 10.0                  A
//Entre 7.5 e 9.0                   B
//Entre 6.0 e 7.5                   C
//Entre 4.0 e 6.0                   D
//Entre 4.0 e 0                     E  

//O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C “REPROVADO” se o conceito for D ou E.

const prompt = require("prompt-sync");
const ask = prompt();

const notaUm = ask("Diga a primeira nota: ");
const notaDois = ask("Diga a segunda nota: ");

const a = Number(notaUm);
const b = Number(notaDois);
let media = (a+b)/2;
const c = Number(media);
let conceito = 0;
let aprovacao = 0;

if (c >= 9.0 && c <= 10.0) {
    conceito = "A";
    aprovacao = "Aprovado";
}

if (c >= 7.5 && c < 9.0) {
    conceito = "B";
    aprovacao = "Aprovado";
}

if (c >= 6.0 && c < 7.5) {
    conceito = "C";
    aprovacao = "Aprovado";
}

if (c >= 4.0 && c < 6.0) {
    conceito = "D";
    aprovacao = "Reprovado";
}

if (c >= 0.0 && c < 4.0) {
    conceito = "E";
    aprovacao = "Reprovado";
}

if (c <0.0 || c > 10.0) {
    conceito = "Indefinido";
    aprovacao = "Dados inválidos"
}

console.log(`As duas notas do aluno foram: ${a} e ${b}`);
console.log(`A média deste aluno é ${c}`);
console.log(`O conceito deste aluno é ${conceito}`);
console.log(`Este aluno está: ${aprovacao}`);
