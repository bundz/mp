//Faça um programa que apresente um menu de opções para o cálculo das seguintes operações entre dois números: adição, subtração, multiplicação e divisão. 
//O programa deve usar laços de repetição para possibilitar ao usuário a escolha da operação desejada, a exibição do resultado e a volta ao menu de opções. 
//O programa só termina quando for escolhida a opção de saída.

const prompt = require("prompt-sync");
const ask = prompt();

let numero1 = ask("Informe o primeiro número ou sair: ");


let resultado = 0;

while (numero1 != 'sair') {
    let numero2 = ask("Informe o segundo número: ");
    let operacao = ask("Informe a operação a ser feita (adicao / subtracao / multiplicacao / divisao): ");
    valor1 = Number(numero1);
    valor2 = Number(numero2);

    if (operacao == "adicao") {
        resultado = valor1 + valor2;
    }

    if (operacao == "subtracao") {
        resultado = valor1 - valor2;
    }

    if (operacao == "multiplicacao") {
        resultado = valor1 * valor2;
    }

    if (operacao == "divisao") {
        resultado= valor1 / valor2;
    }

    console.log(resultado);

    numero1 = ask("Informe o primeiro número ou sair: ");
    numero2 = ask("Informe o segundo número: ");
    operacao = ask("Informe a operação a ser feita (adicao / subtracao / multiplicacao / divisao): ");    
}