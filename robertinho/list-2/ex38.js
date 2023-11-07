//Faça um programa que apresente o menu de opções a seguir:

//Menu de opções:

//Média aritmética
//Média ponderada
//Sair

//Digite a opção desejada:

//Na opção 1: receber duas notas, calcular e mostrar a média aritmética.
//Na opção 2: receber três notas e seus respectivos pesos, calcular e mostrar a média ponderada.
//Na opção 3: sair do programa.

//Verifique a possibilidade de opção inválida, mostrando uma mensagem. 

const prompt = require("prompt-sync");
const ask = prompt();

let opcao = ask ("Qual a opção desejada (1,2 ou 3): ");

let mediaA = 0;
let mediaP = 0;

while (opcao != '3') {
    if (opcao != '1' && opcao != '2' && opcao != '3') {
        console.log(`Opção inválida, bocó`);
    }

    if (opcao == '1') {
        const nota1 = ask("Informe a primeira nota: ");
        const nota2 = ask("Informe a segunda nota: ");

        mediaA = (Number(nota1) + Number(nota2))/2;

        console.log(`A Media Aritmética da ${nota1} e da ${nota2} é: ${mediaA}`);
    }

    if (opcao == '2') {
        const nota1 = ask("Informe a primeira nota: ");
        const peso1 = ask("Informe o primeiro peso: ");
        const nota2 = ask("Informe a segunda nota: ");
        const peso2 = ask("Informe o segundo peso: ");
        const nota3 = ask("Informe a terceira nota: ");
        const peso3 = ask("Informe o terceiro peso: ");

        mediaP = ((Number(nota1) * Number(peso1)) + (Number(nota2) * Number(peso2)) + (Number(nota3) * Number(peso3)))/(Number(peso1) + Number(peso2) + Number(peso3));

        console.log(`A Média Ponderada é: ${mediaP}`);

    }

    opcao = ask ("Qual a opção desejada (1,2 ou 3): ");
}