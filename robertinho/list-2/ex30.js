//Faça um programa que leia um conjunto de dados contendo o número da matrícula, as três notas e a frequência (número de aulas frequentadas) de dez alunos.
//Calcule e mostre:
//Para cada aluno o número da matrícula, a nota final e a mensagem (aprovado ou reprovado);
//A maior e a menor nota da turma;
//O total de alunos reprovados;
//A percentagem de alunos reprovados por frequência abaixo da mínima necessária.

const prompt = require("prompt-sync");
const ask = prompt();

let alunos = 3;
let notaFinal = 0;
let maiorNota = 0;
let menorNota = 10;
let reprovados = 0;
let infrequentes = 0;

for (let i = 0; i < alunos; i++) {
    const matricula = ask("Informe o teu número de matrícula: ");
    const notaUm = ask("Informe tua primeira nota: ");
    const notaDois = ask("Informe a tua segunda nota: ");
    const notaTres = ask("Informe a tua terceira nota: ");
    const frequencia = ask("Informe a tua frequencia na disciplina (%): ");

    let nota1 = Number(notaUm);
    let nota2 = Number(notaDois);
    let nota3 = Number(notaTres);
    let status = 'aprovado';
    
    notaFinal = (nota1 + nota2 + nota3)/3;

    if (notaUm > maiorNota) {
        maiorNota = notaUm;
    }

    if (notaDois > maiorNota) {
        maiorNota = notaDois;
    }

    if (notaTres > maiorNota) {
        maiorNota = notaTres
    }

    if (menorNota > notaUm) {
        menorNota = notaUm;
    }

    if (menorNota > notaDois) {
        menorNota = notaDois;
    }

    if (menorNota > notaTres) {
        menorNota = notaTres;
    }

    if (notaFinal < 7) {
        status = 'reprovado';
        reprovados = reprovados + 1;
    }

    if (frequencia < 70) {
        infrequentes = infrequentes + 1;
        status = 'reprovado';
        reprovados = reprovados + 1;
    }

    console.log(`A matricula do aluno é: ${matricula}; Nota Final: ${notaFinal}; Status: ${status}`);
}

console.log(`A maior nota é: ${maiorNota} e a menor nota é: ${menorNota}`);
console.log(`O total de alunos reprovados é: ${reprovados}`);
console.log(`O total de alunos reprovados por frequencia é: ${infrequentes}`);