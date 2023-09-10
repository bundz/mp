// Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. 
// O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:  

// a. Se o usuário informar o valor de A igual a zero. a equação não e do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// b. Se o delta calculado for negativo, a equação não possui raízes reais. Informe ao usuário e encerre o programa;
// c. Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe ao usuário;
// d. Se o delta for positivo, a equação possui duas raízes reais; informe-as ao usuário;

const prompt = require("prompt-sync");
const ask = prompt();

const a = ask("Informe o valor de A: ");
const A = Number(a);

if (A == 0) {
    console.log("A equacao nao e de segundo grau");
} else{
    const b = ask("Informe o valor de B: ");
    const c = ask("Informe o valor de C: ");
    
    const B = Number(b);
    const C = Number(c);
    let delta = (B*B - 4*A*C);
    
        if (delta < 0) {
            console.log("A equacao nao possui raizes reais");
        }
        
        if (delta == 0) {
            let raizUm = ((-B + Math.sqrt(delta))/2*A);
        
            console.log(`A equacao possui uma raiz real = ${raizUm}`);
        }
        
        if (delta > 0) {
            let raizUm = ((-B + Math.sqrt(delta))/2*A);
            let raizDois = ((-B - Math.sqrt(delta))/2*A);
        
            console.log(`A equacao possui duas raizes reais, sendo elas: ${raizUm} e ${raizDois}`);
        }
}

