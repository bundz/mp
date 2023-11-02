// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e o número de filhos. A prefeitura deseja saber:

//A média do salário da população;
//A média do número de filhos;
//O maior salário;
//A percentagem de pessoas com salários até R$ 150,00. O final da leitura de dados dar-se-á com a entrada de um salário negativo.

const prompt = require("prompt-sync");
const ask = prompt();

let salario = ask("Informe o teu salário (R$): ");
let filhos = ask("Informe o numero de filhos: ");
let entrevistados = 0;
let salarioTotal = 0;
let filhosTotal = 0;
let entrevistadinhos = 0;
let salariao = 0;

while (salario >= 0) {
    entrevistados = entrevistados + 1;
    salarioTotal = salarioTotal + Number(salario);
    filhosTotal = filhosTotal + Number(filhos);
    if (salario > salariao) {
        salariao = salario;
    }
    if (salario <= 150) {
        entrevistadinhos = entrevistadinhos + 1;
    }

    salario = ask("Informe o teu salário (R$): ");
    filhos = ask("Informe o numero de filhos: ");
}

console.log(`Média do salário da população: R$ ${salarioTotal/entrevistados}`);
console.log(`A média do numero de filhos: ${filhosTotal/entrevistados}`);
console.log(`O maior salário: ${salariao}`);
console.log(`Porcentagem de salarios até R$ 150,00: ${(entrevistadinhos/entrevistados)*100}%`);
