//Escreva um programa que pergunte o dia, mês e ano do aniversário de uma pessoa e diga se a data é válida ou não. 
//Caso não seja, diga o motivo. Suponha que todos os meses tem 31 dias e que estejamos no ano de 2013.

const prompt = require("prompt-sync");
const ask = prompt();

const dia = ask("Digite o dia do seu nascimento: ");
const mes = ask("Digite o mês que você nasceu: ");
const ano = ask("Digite o ano que tu nasceu: ");

if (dia >0 && dia <= 31 && mes >= 1 && mes <=12 && ano > 1913 && ano <= 2013) {
    console.log(`Então você nasceu em: ${dia}/${mes}/${ano}`);
} else {
    console.log("Dados inválidos");
}