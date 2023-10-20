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

for (let i = 0; i < alunos; i++) {
    const matricula = ask("Informe o teu número de matrícula: ");
    const notaUm = ask("Informe tua primeira nota: ");
    const notaDois = ask("Informe a tua segunda nota: ");
    const notaTres = ask("Informe a tua terceira nota: ");
    const frequencia = ask("Informe a tua frequencia na disciplina (%): ");

    let nota1 = Number(notaUm);
    let nota2 = Number(notaDois);
    let nota3 = Number(notaTres);
    
    notaFinal = (nota1 + nota2 + nota3)/3;

    console.log(notaFinal);
}

//QUERO VER QUAL A MÉDIA E QUAL A FREQUENCIA NECESSARIA PARA APROVACAO