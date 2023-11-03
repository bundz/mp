// Leia um vetor de 40 posições. Contar e escrever quantos valores pares ele possui.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let arrayPar = [];
let pares = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        pares = pares + 1;
        arrayPar.push(array[i]);
    }
}

console.log(`A quantidade de números pares neste array são: ${pares}, sendo eles: ${arrayPar}`);