//Foi feita uma pesquisa entre os habitantes de uma região. Foram coletados os dados de idade, sexo (M/F) e salário. 
//Faça um programa que calcule e mostre:

//A média dos salários do grupo;
//A maior e a menor idade do grupo;
//A quantidade de mulheres com salário até R$ 200,00;
//A idade e o sexo da pessoa que possui o menor salário. Finalize a entrada de dados ao ser digitada uma idade negativa.

const prompt = require("prompt-sync");
const ask = prompt();

let idade = ask("Informe a tua idade: ");
let sexo = ask("Informe o teu sexo (F-Feminino / M-Masculino): ");
let salario = ask("Informe o teu salário (R$): ");

let salarioTotal = 0;
let entrevistados = 0;
let maiorIdade = 0;
let menorIdade = idade;
let mulheres200 = 0;
let salarinho = salario;
let idadezinha;
let sexozinho;


while (idade >= 0) {
    salarioTotal = salarioTotal + Number(salario);
    entrevistados = entrevistados + 1;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (sexo == "F" && salario <= 200) {
        mulheres200 = mulheres200 + 1;
    }

    if (salarinho > salario) {
        salarinho = salario;
        idadezinha = idade;
        sexozinho = sexo;
    }

    idade = ask("Informe a tua idade: ");
    sexo = ask("Informe o teu sexo (F-Feminino / M-Masculino): ");
    salario = ask("Informe o teu salário (R$): ");
}

console.log(`A media dos salarios é: R$ ${salarioTotal/entrevistados}`);
console.log(`A maior idade do grupo é: ${maiorIdade} anos e a menor idade é: ${menorIdade} anos`);
console.log(`A menor idade e o sexo da pessoa com menor salario é: ${idadezinha} anos do sexo ${sexozinho}`);