//Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo – 3, bom – 2, regular – 1. 
//Faça um programa que receba a idade e a opinião de 15 espectadores e que calcule e mostre:
//A média das idades das pessoas que responderam ótimo;
//A quantidade de pessoas que respondeu regular;
//A percentagem de pessoas que respondeu bom entre todos os espectadores analisados.

const prompt = require("prompt-sync");
const ask = prompt();

let espectadores = 15;
let regular = 0;
let bom = 0;
let otimo = 0;
let idadeOtimo = 0;
let somaIdades = Number(idadeOtimo);

for (let i = 0; i < espectadores; i = i + 1) {
    const idade = ask("Informe a tua idade (anos): ");
    const opiniao = ask("Qual tua opiniao sobre o filme (1 - Regular; 2 - Bom; 3 - Ótimo): ");

    let idadeEspectador = Number(idade);
    if (opiniao == 3) {
        somaIdades = somaIdades + idadeEspectador;
        otimo = otimo + 1;
    }

    if (opiniao == 2) {
        bom = bom + 1;
    }

    if (opiniao == 1) {
        regular = regular + 1;
    }
}

console.log(`A média das idades das pessoas que responderam ótimo é: ${somaIdades/otimo} anos`);
console.log(`A quantidade de pessoas que respondeu regular é: ${regular}`);
console.log(`A percentagem de pessoas que respondeu bom entre todos os espectadores analisados: ${(bom/espectadores)*100}%`);