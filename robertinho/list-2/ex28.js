//Uma firma fez uma pesquisa de mercado para saber se as pessoas gostaram ou não de um novo produto lançado no mercado. 
//Para isso forneceu o sexo do entrevistado e sua resposta (S – Sim ou N – Não). Sabe-se que foram entrevistadas dez pessoas. 

//Faça um programa que calcule e mostre:
//O número de pessoas que respondeu sim;
//O número de pessoas que respondeu não;
//O número de mulheres que respondeu sim;
//A percentagem de homens que respondeu não entre todos os homens analisados.

const prompt = require("prompt-sync");
const ask = prompt();

let entrevistados = 5;
let homensAgrupados = 0;
let mulheresAgrupadas = 0;
let simTotal = 0;
let naoTotal = 0;
let simHomens = 0;
let naoHomens = 0;
let simMulheres = 0;
let naoMulheres = 0;

for (i = 0; i < entrevistados; i ++) {
    const sexo = ask ("Informe o teu sexo (M-Masculino / F-Feminino): ");
    const resposta = ask ("Você gostou do produto (S - Sim / N - Não)? ");

    if (resposta == "S" && sexo == "M") {
        simTotal = simTotal + 1;
        simHomens = simHomens + 1;
        homensAgrupados = homensAgrupados + 1;
    }

    if (resposta == "N" && sexo == "M") {
        naoTotal = naoTotal + 1;
        naoHomens = naoHomens + 1;
        homensAgrupados = homensAgrupados + 1;
    }

    if (resposta == "S" && sexo == "F") {
        simTotal = simTotal + 1;
        simMulheres = simMulheres + 1;
        mulheresAgrupadas = mulheresAgrupadas + 1;
    }

    if (resposta == "N" && sexo == "F") {
        naoTotal = naoTotal + 1;
        naoMulheres = naoMulheres + 1;
        mulheresAgrupadas = mulheresAgrupadas + 1;
    }

}

console.log(`O número de pessoas que respondeu sim: ${simTotal}`);
console.log(`O número de pessoas que respondeu não: ${naoTotal}`);
console.log(`O número de mulheres que respondeu sim: ${simMulheres}`);
console.log(`A percentagem de homens que respondeu não entre todos os homens analisados: ${(naoHomens/homensAgrupados)*100}%`);