//Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.

const array = [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let novoArray = [];

for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] < 0) {
        array[i] = 0;
        novoArray.push(array[i]);
    }
    
    if (array[i] > 0) {
        novoArray.push(array[i]);
    }
}

console.log(novoArray);