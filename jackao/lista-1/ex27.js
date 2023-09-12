// Escreva um programa que pergunte o dia, mês e ano do aniversário de uma pessoa
// e diga se a data é válida ou não. Caso não seja, diga o motivo.
// Suponha que todos os meses tem 31 dias e que estejamos no ano de 2013.

const prompt = require("prompt-sync");
const ask = prompt();

const dia = ask("Qual o dia do seu aniversário");
const mes = ask("Qual o mês do seu aniversário");
const ano = ask("Qual o ano do seu aniversário");

if (dia >0 && dia <= 31 && mes >= 1 && mes <=12 && ano > 1913 && ano <= 2013) {
    console.log(`Então você nasceu em: ${dia}/${mes}/${ano}`);
} else {
    console.log("Dados inválidos");
}