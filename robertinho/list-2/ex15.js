//Uma loja utiliza o código V para transação à vista e P para transação a prazo. 
//Faça um programa que receba código e valor de 15 transações usando laços de repetição. Calcule e mostre:

    //O valor total das compras à vista
    //O valor total das compras a prazo c.
    //O valor total das compras efetuadas
    //O valor da primeira prestação das compras a prazo, sabendo-se que essas serão pagas em três vezes Intermediário

    const prompt = require("prompt-sync");
    const ask = prompt();

let transacoes = 3;
let totalVista = 0;
let totalPrazo = 0;

for (let i = 0; i < transacoes; i ++) {
    const type = ask("Qual o tipo da transacao (V - Vista / P - Prazo): ");
    const value = ask("Inform e o valor da transacao: ");

    if ( type == 'V') {
        totalVista = totalVista + Number(value);
    }

    if (type == 'P') {
        totalPrazo = totalPrazo + Number(value);
    }

}

console.log(`Total a Vista: R$ ${totalVista}`);
console.log(`Total a Prazo: R$ ${totalPrazo}`);
console.log(`Total: R$ ${totalVista + totalPrazo}`);
console.log(`Primeira parcela a Prazo: R$ ${totalPrazo / 3}`);
