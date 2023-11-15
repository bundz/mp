//Escreva um procedimento que recebe as 3 notas de um aluno por parâmetro e uma letra. 
//Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada 
//(pesos: 5, 3 e 2) e se for H, a sua média harmônica. 
//A média calculada também deve retornar por parâmetro.

const prompt = require("prompt-sync");
const ask = prompt();

function mediaA (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}

function mediaP (nota1, nota2, nota3) {
    return ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)/10);
}

function mediaH (nota1, nota2, nota3) {
    return (3 / ((1 / nota1) + (1 / nota2) + (1 / nota3)));
}

const notaUm = ask("Informe a primeira nota: ");
const notaDois = ask("Informe a segunda nota: ");
const notaTres = ask("Informe a terceira nota: ");
const letra = ask("Informe qual média você deseja (A - Arit. / P - Pond. / H - Harm.): ");

const nota1 = Number(notaUm);
const nota2 = Number(notaDois);
const nota3 = Number(notaTres);

if (letra == 'A') {
    console.log(mediaA(nota1,nota2,nota3));
}

if (letra == 'P') {
    console.log(mediaP(nota1,nota2,nota3));
}

if (letra == 'H') {
    console.log(mediaH(nota1,nota2,nota3));
}