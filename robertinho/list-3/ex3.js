//Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa. 
//Escreva ao final o vetor obtido.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const novoArray = [];

for (let i = 0; i < array.length; i ++) {
    if (i <= 7){
        novoArray[i] = array[i] + 8;
    }
    if (i > 7) {
        novoArray[i] = array[i] - 8;
    }
}


console.log(novoArray);