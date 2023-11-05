//Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva.

const arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

const array = [];

for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] % 2 != 0) {
        array.push(arrayBase[i]);
    }
}

console.log(array);

// NÃO ENTENDI MUITO BEM O ENUNCIADO, VER COM O DEDÃO