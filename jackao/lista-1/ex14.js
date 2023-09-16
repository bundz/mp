//Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//Média de aproveitamento        Conceito
//Entre 9.0 e 10.0 A
//Entre 7.5 e 9.0   B
//Entre 6.0 e 7.5                                C
//Entre 4.0 e 6.0                                D
//Entre 4.0 e 0                                   E
//O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C “REPROVADO” se o conceito for D ou E.

const prompt = require("prompt-sync");
const ask = prompt();

const primeiraNota = ask("Qual a primeira nota: ");
const segundaNota = ask("Qual a segunda nota: ");

let primeiroValor = Number(primeiraNota)
let segundoValor = Number(segundaNota)
let media = (primeiroValor + segundoValor) /2;
let veredito = 0;
let conceito = 0;

if(media > 9.0) {
    veredito = "Aprovado";
    conceito = "A";
}

if(media >= 7.5 && media < 9.0) {
    veredito = "Aprovado";
    conceito = "B";
}

if(media >= 6.0 && media < 7.5) {
    veredito = "Aprovado";
    conceito = "C";
}

if(media >= 4.0 && media < 6.0 ){
    veredito = "Reprovado";
    conceito = "D";
}

if(media >= 0 && media < 4.0) {
    veredito = "Reprovado";
    conceito = "E";
}

console.log(`As notas ${primeiraNota} e ${segundaNota} formam uma média de ${media}, que resulta no ${conceito} e assim o aluno está ${veredito}`)

