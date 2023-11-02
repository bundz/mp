//Uma loja deseja cadastrar 5 clientes e verificar se o 
// faturamento da loja foi superior a loja B (faturamento = 54000). 
//Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi 
// superado o faturamento.

const prompt = require("prompt-sync");
const ask = prompt();

//fazer um loop 5x sobre gastos 
let faturamento = 0;

for(let i = 0; i < 5; i++) {
    let gasto = ask("Quanto o cliente gastou? ");
    faturamento = faturamento + Number(gasto);
}

if (faturamento > 54000) {
    console.log("O faturamento foi maior que a loja B. ");
}

