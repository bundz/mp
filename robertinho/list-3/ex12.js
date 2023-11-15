//Leia 3 vetores de 9 posições e crie outro com o 1º terço do primeiro, o segundo 3º. do segundo e o ultimo terço do 3º. 
//Escrever o vetor resultante ao final.

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const array3 = [19, 20, 21, 22, 23, 24, 25, 26, 27];
const arrayFinal = [];

for (let i = 0; i < 9; i ++) {
    if (i < 3) {
        arrayFinal[i] = array1[i]; 
    }
    if (i >=3 && i < 6) {
        arrayFinal[i] = array2[i];
    }
    if (i >=6 && i < 9) {
        arrayFinal[i] = array3[i];
    }
}

console.log(arrayFinal);