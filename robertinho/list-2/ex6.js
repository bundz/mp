//Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). 
//Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

const prompt = require("prompt-sync");
const ask = prompt();

let faturamentoB = 54000;

for ( let i = 0, soma = 0; i < 5; i = i + 1) {
    const fechamento = ask("Me informe o fechamento do cliente: ");

    const valor = Number(fechamento);

    soma = soma + valor;
}

if (soma > faturamentoB) { // como colocar essa condicao sem entrar no laco de repeticao? Erro ao tentar assimilar o que eh a soma
    console.log(`O faturamento da loja foi maior que a da segunda em ${soma-faturamentoB}`);
} else {
    console.log(`Nao foi dessa vez`);
}