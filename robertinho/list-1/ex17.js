// Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano e ou não bissexto.
// Para ser bissexto, o ano deve ser:
// Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;
// Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;
// Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.



const prompt = require("prompt-sync");
const ask = prompt();

const ano = ask("Digite um ano para vermos se e bissexto: ");

const Ano = Number(ano);
const restoUm = Ano % 4;
const restoDois = Ano % 100;
const restoTres = Ano % 400;

if (restoUm == 0 && restoDois != 0 || restoTres == 0) {
    console.log(`O ${ano} e bissexto.`);
} else {
    console.log(`O ${ano} nao e bissexto.`);
}