//Leia um vetor de 40 posições e acumule os valores do primeiro elemento no segundo, deste no terceiro e assim por diante. Ao final, escreva o vetor obtido.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

let soma = 0;

for (let i = 0; i < array.length; i ++) {
    soma = soma + array[i];
}

console.log(soma);

// É PRA MOSTRAR A SOMA TOTAL OU CRIAR UM NOVO ARRAY COM AS SOMAS?