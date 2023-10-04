//Uma loja tem tem uma política de descontos de acordo com o valor da compra do cliente. 
//Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%.
//Por exemplo: R$500 = 1% || R$600,00 = 2% … etc…
//Faça um programa que exiba essa tabela de descontos no seguinte formato:
//Valordacompra – porcentagem de desconto – valor final

let compra = 400;
let valorFinal = '';

for (let porcentagem = 1; porcentagem <=25; porcentagem = porcentagem + 1) {
    compra = compra + 100;
    valorFinal= compra - ((porcentagem/100)*compra);

    console.log(`O valor da Compra e: ${compra}; a porcentagem de desconto e: ${porcentagem}%; e o valor final e: ${valorFinal}`);
}