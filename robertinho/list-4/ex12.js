//Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. 
//Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt – 58 e, 
//para mulheres: peso ideal = 62.1 x alt – 44.7.

const prompt = require("prompt-sync");
const ask = prompt();

const heigth = ask("Digite tua altura (metros): ");
const sex = ask("Informe teu sexo (M/F): ");

function idealWeight (heigth, sex) {
    if (sex == "M") {
        return (`O peso ideal é: ${(72.7 * Number(heigth)-58)} kg`);
    }

    if (sex == "F") {
        return (`O peso ideal é: ${(62.1 * Number(heigth)-44.7)} kg`);
    }
}

console.log(idealWeight(heigth,sex));