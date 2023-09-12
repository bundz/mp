// Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. 
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. 
// Dicas:
// Três lados formam um triangulo quando a soma de quaisquer dos dois lados é maior que o terceiro.
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

const prompt = require("prompt-sync");
const ask = prompt();

const ladoUm = ask("Digite o primeiro lado do triangulo: ");
const ladoDois = ask("Digite o segundo lado do triangulo: ");
const ladoTres = ask("Digite o terceiro lado do triangulo: ");

const a = Number(ladoUm);
const b = Number(ladoDois);
const c = Number(ladoTres);

if ((a + b) > c && (a + c) > b && (b + c) > a) {
    console.log("Os valores sao de um triangulo");

    if (a == b && b == c) {
        console.log("O tipo do triangulo: Equilatero");
    }
    
    if (a != b && a != c && b != c) {
        console.log("O tipo do triangulo: Escaleno");
    }
    
    if (a == b && b != c || a == c && c != b || b == c && b != a) {
        console.log("O tipo do triangulo: Isosceles");
    }
} else {
    console.log("Nao e um triangulo");
}