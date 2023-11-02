// Foi feita uma pesquisa de audiência de canal de TV em várias casas de uma cidade, em um determinado dia. 
//Para cada casa consultada foi fornecido o número do canal (4, 5, 7, 12) e o número de pessoas que estavam assistindo aquele canal. 
//Se a televisão estivesse desligada, nada era anotado, ou seja, essa casa não entrava na pesquisa. Faça um programa que:

//Leia um número indeterminado de dados (número do canal e o número de pessoas que estavam assistindo);
//Calcule e mostre a percentagem de audiência de cada canal.
//Para encerrar a entrada de dados digite o número do canal ZERO.

const prompt = require("prompt-sync");
const ask = prompt();

let canal = ask("Qual canal você está assistindo (4-5-7-12): ");

let espectador4 = 0;
let espectador5 = 0;
let espectador7 = 0;
let espectador12 = 0;

while (canal != "0") {
    let espectadores = ask("Quantas pessoas estão assitindo: ");
    if (canal == "4") {
        espectador4 = espectador4 + Number(espectadores);
    }

    if (canal == "5") {
        espectador5 = espectador5 + Number(espectadores);
    }

    if (canal == "7") {
        espectador7 = espectador7 + Number(espectadores);
    }

    if (canal == "12") {
        espectador12 = espectador12 + Number(espectadores);
    }

    canal = ask("Qual canal você está assistindo (4-5-7-12): ");
}

let espectadoresTotal = espectador4 + espectador5 + espectador7 + espectador12;

console.log(`A porcentagem de pessoas que assiste o canal 4 é: ${(espectador4/espectadoresTotal)*100}%`);
console.log(`A porcentagem de pessoas que assiste o canal 5 é: ${(espectador5/espectadoresTotal)*100}%`);
console.log(`A porcentagem de pessoas que assiste o canal 7 é: ${(espectador7/espectadoresTotal)*100}%`);
console.log(`A porcentagem de pessoas que assiste o canal 12 é: ${(espectador12/espectadoresTotal)*100}%`);