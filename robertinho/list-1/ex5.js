//PROGRAMA QUE Faça um programa para a leitura de duas notas parciais de um aluno.//

//A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;//
//A mensagem “Aprovado com Distinção”, se a média for igual a dez;//
//A mensagem “Reprovado” se a média for menor de do que sete;//

const prompt = require("prompt-sync");
const ask = prompt();

const notaUm = ask("Diga a primeira nota: ");
const notaDois = ask("Diga a segunda nota: ");

const a = Number(notaUm);
const b = Number(notaDois);
let media = (a+b)/2;
const c = Number(media);


if (c < 7) {
    console.log(`Média = ${c}, Aluno Reprovado`);
}

if (c >= 7 && c <10) {
    console.log(`Média = ${c}, Aluno Aprovado`);
}

if (c == 10) {
    console.log(`Média = ${c}, Aluno Aprovado com Distinção`);
}

if (c <0.0 || c > 10.0) {
    conceito = "Indefinido";
    aprovacao = "Dados inválidos"
}