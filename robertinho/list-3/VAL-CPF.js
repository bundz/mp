let cpf = document.querySelector(inCPF);
let buttonValidar = document.querySelector(validar);
let eValido = document.querySelector(validador);
let soma = 0;

buttonValidar.onclick = function() {

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }

    if (soma % 11 == 0) {
        eValido.innertext = 'Válido';
        eValido.style.color = "green";
    }

    if (cpf.length < 11 || cpf.length > 11) {
        eValido.innertext = 'Inválido';
        eValido.style.color = "red";
    }
}