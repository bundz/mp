// Faça um programa que apresente o menu de opções a seguir, que permita ao usuário escolher a opção desejada, receba os dados necessários para executar a operação e mostre o resultado. 
// Verificar a possibilidade de opção inválida e não se preocupar com as restrições, como salário inválido.

// Menu de opções:

// Novo salário
// Férias
// Décimo terceiro
// Sair

// Digite a opção desejada :

// Na Opção 1: receber o salário de um funcionário, calcular e mostrar o novo salário usando as regras a seguir.

// SaláriosPercentagem de aumentoAté R$ 350,0015%De R$ 350,00 a R$ 600,0010%Acima de R$ 600,005%

// Na opção 2: receber o salário de um funcionário, calcular e mostrar o valor de suas férias. Sabe-se que as férias equivalem ao seu salário acrescido de l/Ê.

// Na opção 3: receber o salário de um funcionário e o número de meses de trabalho na empresa, no máximo 12, calcular e mostrar o valor do décimo terceiro. 
//Sabe-se que o décimo terceiro equivale ao seu salário multiplicado pelo número de meses de trabalho dividido por 12.

// Na opção 4: sair do programa. 

const prompt = require("prompt-sync");
const ask = prompt();

let opcao = ask ("Qual a opção desejada (1, 2, 3 ou 4): ");

let percentagem = 0;

let ferias = 0;

let decimo = 0;

while (opcao != '4') {
    if (opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4') {
        console.log(`Opção inválida, bocó`);
    }

    if (opcao == '1') {
        const salario = ask("Informe teu salario: ");
        
        if (salario < '350') {
            percentagem = 0.15;
        }

        if (salario > '350' && salario <= '600') {
            percentagem = 0.10;

        }

        if (salario > '600') {
            percentagem = 0.05;
        }

        console.log(`O novo salario do funcionário é: ${Number(salario) + (Number(salario)*percentagem)}`);

    }

    if (opcao == '2') {
        const salario = ask("Informe o teu salário: ");

        ferias = Number(salario) + ((Number(salario)/3));

        console.log(`O teu salário das férias será: ${ferias}`);

    }

    if (opcao == '3') {
        const salario = ask("Informe o teu salário: ");
        const meses = ask("Informe a quantidade de meses trabalhados (limite 12): ");

        if (meses > '12') {
            console.log(`Quer trabalhar mais que todo mundo, é? `);
        }

        decimo = (Number(salario) * Number(meses))/12;

        console.log(`O valor do décimo terceiro é: ${decimo}`);
    }
    opcao = ask ("Qual a opção desejada (1, 2, 3 ou 4): ");
}