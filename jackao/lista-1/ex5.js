//Fácil 5- Faça um programa para a leitura de duas notas parciais de um aluno.  
//A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
//A mensagem “Aprovado com Distinção”, se a média for igual a dez;
//A mensagem “Reprovado” se a média for menor de do que sete;


// media >= 7 imprime Aprovado
// media = 10 imprime Aprovado com Distinção
// media < 7 imprime Reprovado

const prompt = require("prompt-sync");
const ask = prompt();

const primeiraNota = ask("Me diga sua primeira nota: ");
const segundaNota = ask("Me diga sua segunda nota: ");

let media = (Number(primeiraNota) + Number(segundaNota) )/2;

console.log(media);



if(media >= 7 && media < 10) {
    console.log ("Aprovado");

} 

if(media < 7) {
    console.log ("Reprovado");

}

if(media == 10) {
    console.log ("Aprovado com Distinção");
}

