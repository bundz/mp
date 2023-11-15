// Leia um vetor de 20 posições e em seguida um valor X qualquer. 
//Seu programa devera fazer uma busca do valor de X no vetor lido e informar a posição em que foi encontrado 
//ou se não foi encontrado.

const prompt = require("prompt-sync");
const ask = prompt();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const valor = ask("Informe um valor: ");

for (let i = 0; i < array.length; i++) {   
    if (array[i] == valor) {
        console.log(`A posição do valor no Array é: ${i}`);
    }
}

// if (!array.includes(valor)) {
//     console.log(`Valor não encontrado`);
// }

// NÃO CONSIGO FAZER ELE MOSTRAR SE O VALOR NÃO ESTÁ NO VETOR