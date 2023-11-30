//Faça um procedimento que recebe por parâmetro os valores necessário para o cálculo da 
//fórmula de báskara e retorna,também por parâmetro, as suas raízes, caso seja possível calcular.

const prompt = require("prompt-sync");
const ask = prompt();

const a = ask("Informe o termo 'a': ");
const b = ask("Informe o termo 'b': ");
const c = ask("Informe o termo 'c': ");

let raiz1 = 0;
let raiz2 = 0;
let delta = 0;

function bhaskara (a,b,c) {
    delta = ((b * b) - 4 * a * c);

    raiz1 = ((- b + Math.sqrt(delta))/(2*a));

    raiz2 = ((- b - Math.sqrt(delta))/(2*a));

    if (delta < 0) {
        return (`O conjunto de dados não apresenta raízes reais`);
    }

    if (delta == 0) {
        return (`Conjunto de dados apresenta uma única raiz = ${raiz1}`);
    }

    if (delta > 0) {
        return (`As raízes são: ${raiz1} e ${raiz2}`);
    }
}

console.log(bhaskara(a,b,c));